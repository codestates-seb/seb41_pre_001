package com.seb.seb41_preproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class Seb41PreprojectApplication {

    public static void main(String[] args) {

        SpringApplication.run(Seb41PreprojectApplication.class, args);
    }

}