package com.seb.seb41_preproject.member.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class MemberDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class MemberPostDto {

        @NotBlank
        private String userName;
        @Email
        private String userEmail;
        private String userPassword;
        private String userImageUrl;

    }

}
