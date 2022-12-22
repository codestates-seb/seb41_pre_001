package com.seb.seb41_preproject.member.dto;

import lombok.Getter;
import lombok.Setter;

public class MemberDto {

    @Getter
    @Setter
    public static class MemberPostDto {

        private String userName;
        private String userEmail;
        private String UserPassword;
        private String UserImageUrl;

    }

}
