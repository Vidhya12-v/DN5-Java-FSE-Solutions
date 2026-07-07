package com.cognizant.springrest;

import com.cognizant.springrest.task5.Country5;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @GetMapping("/country")
    public Country5 getCountryIndia() {
        LOGGER.info("Start of getCountryIndia()");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country5 country = context.getBean("country", Country5.class);
        LOGGER.debug("Country: {}", country);
        LOGGER.info("End of getCountryIndia()");
        return country;
    }
}