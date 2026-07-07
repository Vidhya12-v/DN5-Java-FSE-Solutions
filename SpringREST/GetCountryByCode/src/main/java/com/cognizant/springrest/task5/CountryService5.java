package com.cognizant.springrest.task5;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService5 {

    private List<Country5> countryList;

    public CountryService5() {
        countryList = new ArrayList<>();
        Country5 in = new Country5();
        in.setCode("IN");
        in.setName("India");
        Country5 us = new Country5();
        us.setCode("US");
        us.setName("United States");
        Country5 de = new Country5();
        de.setCode("DE");
        de.setName("Germany");
        Country5 jp = new Country5();
        jp.setCode("JP");
        jp.setName("Japan");
        countryList.add(in);
        countryList.add(us);
        countryList.add(de);
        countryList.add(jp);
    }

    public Country5 getCountry(String code) {
        for (Country5 c : countryList) {
            if (c.getCode().equalsIgnoreCase(code)) {
                return c;
            }
        }
        return null;
    }

    public List<Country5> getAllCountries() {
        return countryList;
    }
}