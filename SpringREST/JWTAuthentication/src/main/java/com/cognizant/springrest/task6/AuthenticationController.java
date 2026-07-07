package com.cognizant.springrest.task6;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader(value = "Authorization", required = false) String authHeader) {
        LOGGER.info("Start");
        Map<String, String> map = new HashMap<>();
        map.put("token", "");

        // Check if Authorization header is missing
        if (authHeader == null) {
            LOGGER.warn("Authorization header is missing");
            map.put("error", "Authorization header is missing");
            LOGGER.info("End");
            return map;
        }

        // Check if header starts with "Basic "
        if (!authHeader.startsWith("Basic ")) {
            LOGGER.warn("Authorization header does not start with Basic");
            map.put("error", "Invalid Authorization header format");
            LOGGER.info("End");
            return map;
        }

        try {
            // Extract Base64 credentials
            String base64Credentials = authHeader.substring(6);
            LOGGER.debug("Base64 credentials: {}", base64Credentials);

            // Decode Base64
            byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(decodedBytes);
            LOGGER.debug("Decoded credentials: {}", credentials);

            // Split username and password
            String[] parts = credentials.split(":", 2);
            if (parts.length < 2) {
                LOGGER.warn("Invalid credentials format");
                map.put("error", "Invalid credentials format");
                LOGGER.info("End");
                return map;
            }

            String username = parts[0];
            String password = parts[1];

            LOGGER.debug("Username: {}, Password: {}", username, password);

            // Validate credentials
            if ("user".equals(username) && "pwd".equals(password)) {
                String token = generateJwt(username);
                map.put("token", token);
                LOGGER.debug("Token generated for user: {}", username);
            } else {
                LOGGER.warn("Invalid credentials");
                map.put("error", "Invalid username or password");
            }

        } catch (IllegalArgumentException e) {
            LOGGER.error("Base64 decoding error: {}", e.getMessage());
            map.put("error", "Invalid Base64 encoding");
        } catch (Exception e) {
            LOGGER.error("Authentication error: {}", e.getMessage());
            map.put("error", "Authentication failed");
        }

        LOGGER.info("End");
        return map;
    }

    private String generateJwt(String user) {
        LOGGER.info("Start generateJwt");
        JwtBuilder builder = Jwts.builder();
        builder.setSubject(user);
        builder.setIssuedAt(new Date());
        builder.setExpiration(new Date((new Date()).getTime() + 1200000)); // 20 minutes
        builder.signWith(SignatureAlgorithm.HS256, "secretkey");

        String token = builder.compact();
        LOGGER.debug("Generated token: {}", token);
        LOGGER.info("End generateJwt");
        return token;
    }
}