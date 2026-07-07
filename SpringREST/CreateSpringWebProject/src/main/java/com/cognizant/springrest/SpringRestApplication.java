package com.cognizant.springrest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringRestApplication {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
        System.out.println("🚀 Spring REST Application Started!");
    }
}