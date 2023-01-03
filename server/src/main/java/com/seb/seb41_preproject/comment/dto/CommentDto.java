package com.seb.seb41_preproject.comment.dto;

import com.seb.seb41_preproject.member.entity.Member;
import jakarta.persistence.Column;
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

        private Long postId;
        @NotNull
        private String content;
        private String userName;
        private String userImageUrl;

        public void setId(Long id) {
            this.id = id;
        }

        public void setPostId(Long post_id) {
        }
    }


    @Getter
    @Setter
    public static class CommentResponseDto{

        private Long id;
        private String content;
        private LocalDateTime createdAt;
        private String userId;
        private String userName;
        private String userImageUrl;

    }

}
