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
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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


        // Log request
        logger.info("Incoming request - Method: {}, URI: {}",  httpRequest.getMethod(),  httpRequest.getRequestURI());

        // Continue with the filter chain
        try {
            String requestURI           = httpRequest.getRequestURI();
            String contextPath          = httpRequest.getContextPath();
            String uriWithoutContext    = requestURI.substring(contextPath.length());

            List<String> publicEndPoints        = Arrays.asList("security/login");

            if (publicEndPoints.contains(uriWithoutContext)) {

                String token = httpRequest.getHeader("Authorization");

                // Validate the token using TokenValidator
                boolean isValidToken = jwtTokenManager.validateToken(token);

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
            ObjectMapper objectMapper = new ObjectMapper();
            PrintWriter writer = httpResponse.getWriter();
            objectMapper.writeValue(writer, errorResponse);
            writer.flush();
            writer.close();
        }

        // Log response
        logger.info("Outgoing response - Status: {}", httpResponse.getStatus());
    }

}