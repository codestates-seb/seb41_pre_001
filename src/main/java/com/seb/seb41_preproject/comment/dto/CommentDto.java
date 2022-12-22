package com.seb.seb41_preproject.comment.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

public class CommentDto {

    @Getter
    @Setter
    public static class CommentPostDto{
        @NotNull
        private String content;

    }

    @Getter
    @Setter
    public static class CommentPatchDto {

        private Long id;

        @NotNull
        private String content;

        public void setId(Long id) {
            this.id = id;
        }
    }


    @Getter
    @AllArgsConstructor
    public static class CommentResponseDto{

        private Long id;
        private String content;
        private LocalDateTime createdAt;
    }

}
