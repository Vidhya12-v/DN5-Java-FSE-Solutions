package com.cognizant.springrest.task5;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class CountryController5 {

    @Autowired
    private CountryService5 countryService;

    @GetMapping("/country")
    public Country5 getCountryIndia() {
        return countryService.getCountry("IN");
    }

    @GetMapping("/countries")
    public List<Country5> getAllCountries() {
        return countryService.getAllCountries();
    }

    @GetMapping("/countries/{code}")
    public Country5 getCountry(@PathVariable String code) {
        return countryService.getCountry(code);
    }
}