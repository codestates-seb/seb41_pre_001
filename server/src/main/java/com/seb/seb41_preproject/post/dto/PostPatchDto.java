package com.seb.seb41_preproject.post.dto;

import com.seb.seb41_preproject.likes.entity.Likes;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class PostPatchDto {
    private long id;

    @NotBlank
    private String title;

    @NotBlank
    private String content;

    @NotBlank
    private String tag;

    @NotBlank
    private LocalDateTime createdAt;
}
