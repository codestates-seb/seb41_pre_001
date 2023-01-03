package com.seb.seb41_preproject.comment.mapper;

import com.seb.seb41_preproject.comment.dto.CommentDto;
import com.seb.seb41_preproject.comment.entity.Comment;
import org.mapstruct.Mapper;

import java.util.List;

import static com.seb.seb41_preproject.comment.dto.CommentDto.*;

@Mapper(componentModel = "spring")
public interface CommentMapper {

    Comment CommentPostDtoToComment(CommentPostDto commentPostDto);
    Comment CommentPatchDtoToComment(CommentPatchDto commentPatchDto);
    CommentResponseDto CommentToCommentResponseDto(Comment comment);


//    List<CommentResponseDto> commentResponseDtoList(List<Comment> commentList);
}
