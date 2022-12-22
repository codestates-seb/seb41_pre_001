package com.seb.seb41_preproject.Security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:application-jwt.yml")
public class JwtProperties {

    @Value("${jwt.secret}")
    private String secretKey;

//    @Value("${jwt.algorithm}")
//    private String algorithm;
}
