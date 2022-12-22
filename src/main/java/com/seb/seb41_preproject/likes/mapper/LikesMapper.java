package com.seb.seb41_preproject.likes.mapper;

import com.seb.seb41_preproject.likes.dto.LikesDto;
import com.seb.seb41_preproject.likes.entity.Likes;
import org.mapstruct.Mapper;

import static com.seb.seb41_preproject.likes.dto.LikesDto.*;

@Mapper(componentModel = "spring")
public interface LikesMapper {

    Likes LikesPostDtoToLikes(LikesPostDto likesPostDto);

    Likes LikesCommentDtoToLikes(LikesCommentDto likesCommentDto);

    LikesResponseDto LikesToLikesResponseDto(Likes likes);
}
