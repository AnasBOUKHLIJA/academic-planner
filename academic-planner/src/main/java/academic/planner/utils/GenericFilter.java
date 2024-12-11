package academic.planner.utils;

import academic.planner.entities.Person;
import academic.planner.repositories.PersonRepository;
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
    private final JwtTokenManager jwtTokenManager;
    private final PersonRepository personRepository;

    @Autowired
    public GenericFilter(JwtTokenManager jwtTokenManager, PersonRepository personRepository) {
        this.jwtTokenManager = jwtTokenManager;
        this.personRepository = personRepository;
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

                Optional<Person> optionalPerson = personRepository.findByUsername(username);
                if(! optionalPerson.isPresent()) throw new AcademicPlannerException(ErrorCode.person_not_found, "Person not found with username => " + username);

                if(httpRequest.getRequestURI().startsWith("/academic-planner/api/v1/admin")){
                    if(! optionalPerson.get().getProfile().getCode().equals("admin")){
                        throw new AcademicPlannerException(ErrorCode.unauthorized, "You are not authorized. Please login.");
                    }
                } else if(httpRequest.getRequestURI().startsWith("/academic-planner/api/v1/teacher")){
                    if(! optionalPerson.get().getProfile().getCode().equals("teacher")){
                        throw new AcademicPlannerException(ErrorCode.unauthorized, "You are not authorized. Please login.");
                    }
                } else if(httpRequest.getRequestURI().startsWith("/academic-planner/api/v1/student")) {
                    if(! optionalPerson.get().getProfile().getCode().equals("student")){
                        throw new AcademicPlannerException(ErrorCode.unauthorized, "You are not authorized. Please login.");
                    }
                }
                // Log request
                logger.info("Incoming request -> Method: {}, URI: {}, username: {}",
                        httpRequest.getMethod(),  httpRequest.getRequestURI(), username);

                // Validate the token using TokenValidator
                boolean isValidToken = jwtTokenManager.validateTokenForUsername(token, username);

                if (!isValidToken) {
                    // Token is invalid, return unauthorized status
                    throw new AcademicPlannerException(ErrorCode.unauthorized, "You are not authorized. Please login.");
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

            // Set the CORS headers
            httpResponse.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
            httpResponse.setHeader("Access-Control-Allow-Methods", "*");
            httpResponse.setHeader("Access-Control-Allow-Headers", "*");
            httpResponse.setHeader("Access-Control-Allow-Credentials", "true");

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
