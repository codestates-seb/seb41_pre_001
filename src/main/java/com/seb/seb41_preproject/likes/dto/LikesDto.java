package com.seb.seb41_preproject.likes.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class LikesDto {

    @Getter
    @Setter
    public static class LikesPostDto {
        private int count;
    }

    @Getter
    @Setter
    public static class LikesCommentDto {
        private int count;
    }


    @Getter
    @AllArgsConstructor
    public static class LikesResponseDto {

        private int count;
        private int LikesCheck;
    }


}
