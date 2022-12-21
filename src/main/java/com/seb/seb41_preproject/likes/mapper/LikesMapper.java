package com.seb.seb41_preproject.likes.mapper;

import com.seb.seb41_preproject.likes.dto.LikesDto;
import com.seb.seb41_preproject.likes.entity.Likes;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LikesMapper {

    Likes LikesPostDtoToLikes(LikesDto.LikesPostDto likesPostDto);
}
