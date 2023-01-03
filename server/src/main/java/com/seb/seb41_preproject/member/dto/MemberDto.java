package com.seb.seb41_preproject.member.dto;

import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.likes.entity.Likes;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.entity.Member.MemberStatus;
import com.seb.seb41_preproject.post.entity.Post;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

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

    @Getter
    @Setter
    @NoArgsConstructor
    public static class MemberPatchDto {

        private String userName;
        private String userPassword;
        private String userImageUrl;

    }
    @Getter
    @Setter
    @NoArgsConstructor
    public static class MemberGetDto {

        private Long id;
        private String userName;
        private String userEmail;
        private String userImageUrl;
        private MemberStatus memberStatus;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class MemberPostResponseDto{

        private Long id;
        private String userName;
        private String userEmail;
        private String userImageUrl;
        private MemberStatus memberStatus;
        private List<String> roles = new ArrayList<>();

    }
}
