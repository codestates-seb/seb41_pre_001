package com.seb.seb41_preproject.post.dto;

import com.seb.seb41_preproject.entity.Comment;
import com.seb.seb41_preproject.entity.Likes;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
public class PostResponseDto {
    private long id;
    private String title;
    private String content;
    private String tag;
    private LocalDateTime createdAt;
    private long views;
    private List<Likes> likes;
}
