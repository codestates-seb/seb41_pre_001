package com.seb.seb41_preproject.Security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:config/jwt.properties")
public class JwtProperties {
    @Value("${jwt.secretKey}")
    private String secretKey;

    @Value("${jwt.algorithm}")
    private String algorithm;
}
