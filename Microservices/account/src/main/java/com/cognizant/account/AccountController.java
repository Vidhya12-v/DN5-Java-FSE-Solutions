package com.cognizant.account;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AccountController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AccountController.class);

    @GetMapping("/accounts/{number}")
    public Map<String, Object> getAccount(@PathVariable String number) {
        LOGGER.info("Start - Fetching account details for number: {}", number);

        Map<String, Object> response = new HashMap<>();
        response.put("number", "00987987973432");
        response.put("type", "savings");
        response.put("balance", 234343);

        LOGGER.debug("Response: {}", response);
        LOGGER.info("End");
        return response;
    }
}