package com.seb.seb41_preproject.dto;

import com.seb.seb41_preproject.comment.dto.CommentDto;
import com.seb.seb41_preproject.comment.dto.CommentDto.CommentResponseDto;
import com.seb.seb41_preproject.likes.dto.LikesDto;
import com.seb.seb41_preproject.likes.dto.LikesDto.LikesResponseDto;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.post.dto.PostCommentResponseDto;
import com.seb.seb41_preproject.post.dto.PostResponseDto;
import com.seb.seb41_preproject.post.entity.Post;
import lombok.Getter;

@Getter
public class MultiResponseDto {
    private Member member;

    private LikesResponseDto likesResponseDto;
    private CommentResponseDto commentResponseDto;
    private PostResponseDto postResponseDto;
    private PostCommentResponseDto postToPostCommentResponseDto;

    public MultiResponseDto( PostResponseDto postResponseDto, Member member) {
        this.postResponseDto = postResponseDto;
        this.member = member;
    }

    public MultiResponseDto(CommentResponseDto commentResponseDto,Member member ) {
        this.commentResponseDto = commentResponseDto;
        this.member = member;
    }

    public MultiResponseDto(LikesResponseDto likesResponseDto , Member member ) {
        this.likesResponseDto = likesResponseDto;
        this.member = member;
    }

    public MultiResponseDto(PostCommentResponseDto postToPostCommentResponseDto, Member member) {
        this.postToPostCommentResponseDto = postToPostCommentResponseDto;
        this.member = member;
    }
}
