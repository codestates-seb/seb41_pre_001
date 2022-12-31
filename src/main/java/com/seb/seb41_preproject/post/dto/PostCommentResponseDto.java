package com.seb.seb41_preproject.post.dto;

import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.likes.entity.Likes;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@AllArgsConstructor
public class PostCommentResponseDto {
    private long id;
    private String userName;
    private String title;
    private String content;
    private List<String> tags;
    private LocalDateTime createdAt;
    private long views;
    private int likeCount;
    private List<Comment> comments;
}
