package com.seb.seb41_preproject.auth.jwt;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TokenResponse {
    private final String atk;
    private final String rtk;
}
