package academic.planner.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

@Component
public class GenericFilter implements Filter {

    protected Logger logger = LoggerFactory.getLogger(getClass());

    private final PayloadLogger payloadLogger;
    private final JwtTokenManager jwtTokenManager;

    @Autowired
    public GenericFilter(PayloadLogger payloadLogger, JwtTokenManager jwtTokenManager) {
        this.payloadLogger      = payloadLogger;
        this.jwtTokenManager    = jwtTokenManager;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        String method = httpRequest.getMethod();
        if ("OPTIONS".equalsIgnoreCase(method)) {
            chain.doFilter(request, response);
            return;
        }


        ObjectMapper objectMapper = new ObjectMapper();

        // Continue with the filter chain
        try {

            // Log all headers for debugging
            /*Enumeration<String> headerNames = httpRequest.getHeaderNames();
            Map<String, String> headersMap = new HashMap<>();
            while (headerNames.hasMoreElements()) {
                String headerName = headerNames.nextElement();
                String headerValue = httpRequest.getHeader(headerName);
                headersMap.put(headerName, headerValue);
            }
            String headersJson = objectMapper.writeValueAsString(headersMap);*/

            String requestURI           = httpRequest.getRequestURI();
            String contextPath          = httpRequest.getContextPath();
            String uriWithoutContext    = requestURI.substring(contextPath.length());

            List<String> publicEndPoints        = Arrays.asList("/security/login");
            String username                     = null;
            String token                        = null;
            if (! publicEndPoints.contains(uriWithoutContext)) {

                username = httpRequest.getHeader("username");
                token    = httpRequest.getHeader("Authorization");
                if (token != null && token.startsWith("Bearer ")) {
                    token = token.substring("Bearer ".length());
                }

                // Log request
                logger.info("Incoming request -> Method: {}, URI: {}, username: {}",
                        httpRequest.getMethod(),  httpRequest.getRequestURI(), username);

                // Validate the token using TokenValidator
                boolean isValidToken = jwtTokenManager.validateTokenForUsername(token, username);

                if (!isValidToken) {
                    // Token is invalid, return unauthorized status
                    httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                    return;
                }
            }
            chain.doFilter(request, response);
        } catch (Throwable throwable) {
            throwable.printStackTrace();
            httpResponse.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            String errorCode    = null;
            String errorMessage = null;

            Throwable cause = throwable;
            while (cause != null && !(cause instanceof AcademicPlannerException)) {
                cause = cause.getCause();
            }

            if (cause instanceof AcademicPlannerException academicPlannerException) {
                errorCode = academicPlannerException.getErrorCode().name();
                errorMessage = academicPlannerException.getMessage();
            } else {
                errorCode = ErrorCode.Declined.name();
                errorMessage = "An error occurred while processing the request";
            }

            // Write error message to the response body
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("errorCode", errorCode);
            errorResponse.put("errorMessage", errorMessage);
            errorResponse.put("status", String.valueOf(HttpServletResponse.SC_INTERNAL_SERVER_ERROR));

            httpResponse.setContentType(MediaType.APPLICATION_JSON_VALUE);
            PrintWriter writer = httpResponse.getWriter();
            objectMapper.writeValue(writer, errorResponse);
            writer.flush();
            writer.close();
        }

        // Log response
        logger.info("Outgoing response - Status: {}", httpResponse.getStatus());
    }

}
