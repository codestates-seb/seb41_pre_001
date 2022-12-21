package com.seb.seb41_preproject.post.mapper;

import com.seb.seb41_preproject.post.entity.Post;
import com.seb.seb41_preproject.post.dto.*;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PostMapper {
    Post postDtoToPost(PostDto postDto);

    Post postPatchDtoToPost(PostPatchDto postPatchDto);

    PostResponseDto postToPostResponseDto(Post post);

    BoardResponseDto postToBoardResponseDto(Post post);

    PostCommentResponseDto postToPostCommentResponseDto(Post post);
}

