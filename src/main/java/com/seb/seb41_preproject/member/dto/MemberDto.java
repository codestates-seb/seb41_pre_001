package com.seb.seb41_preproject.member.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class MemberDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class MemberPostDto {

        private String userName;
        private String userEmail;
        private String userPassword;
        private String userImageUrl;

    }

}
