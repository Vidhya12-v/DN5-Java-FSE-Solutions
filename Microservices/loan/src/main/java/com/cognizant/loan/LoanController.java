package com.cognizant.loan;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class LoanController {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoanController.class);

    @GetMapping("/loans/{number}")
    public Map<String, Object> getLoan(@PathVariable String number) {
        LOGGER.info("Start - Fetching loan details for number: {}", number);

        Map<String, Object> response = new HashMap<>();
        response.put("number", "H00987987972342");
        response.put("type", "car");
        response.put("loan", 400000);
        response.put("emi", 3258);
        response.put("tenure", 18);

        LOGGER.debug("Response: {}", response);
        LOGGER.info("End");
        return response;
    }
}