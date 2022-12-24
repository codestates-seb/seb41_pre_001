package com.seb.seb41_preproject.likes.controller;

import com.seb.seb41_preproject.likes.dto.LikesDto;
import com.seb.seb41_preproject.likes.dto.LikesDto.LikesCommentDto;
import com.seb.seb41_preproject.likes.dto.LikesDto.LikesPostDto;
import com.seb.seb41_preproject.likes.entity.Likes;
import com.seb.seb41_preproject.likes.mapper.LikesMapper;
import com.seb.seb41_preproject.likes.service.LikesService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@Slf4j
@RestController
@RequestMapping("/board/posts/{post_id}")
public class LikesController {
    private final LikesService likesService;
    private final LikesMapper likesMapper;

    public LikesController(LikesService likesService, LikesMapper likesMapper) {
        this.likesService = likesService;
        this.likesMapper = likesMapper;
    }

    @PostMapping("/postLikes")
    public ResponseEntity PostLikes(@RequestBody LikesPostDto likesPostDto, @PathVariable("post_id") Long postId) {

        Likes likes = likesMapper.LikesPostDtoToLikes(likesPostDto);
        likesService.increasePostLikes(likes, postId);
//      Todo : member의 like check 정보를 포함해서 넘겨줘야함.
        log.info("""
                
                =====================
                ## 게시글 추천&비추천 로직실행
                =====================""");

        return new ResponseEntity<>(likesMapper.LikesToLikesResponseDto(likes),HttpStatus.OK);
    }

    @PostMapping("/comment/{comment_id}/commentLikes")
    public ResponseEntity CommentLikes(@RequestBody LikesCommentDto likesCommentDto, @PathVariable("comment_id") Long commentId ,@PathVariable("post_id") Long postId) {

        Likes likes = likesMapper.LikesCommentDtoToLikes(likesCommentDto);
        likesService.increaseCommentLikes(likes,commentId,postId);
//      Todo : member의 like check 정보를 포함해서 넘겨줘야함.
        log.info("""
                
                =====================
                ## 댓글 추천&비추천 로직실행
                =====================""");

        return new ResponseEntity<>(likesMapper.LikesToLikesResponseDto(likes),HttpStatus.OK);
    }

    @PostMapping("/postUnLikes")
    public ResponseEntity PostUnLikes(@RequestBody LikesPostDto likesPostDto, @PathVariable("post_id") Long postId) {

        Likes likes = likesMapper.LikesPostDtoToLikes(likesPostDto);
        likesService.decreasePostLikes(likes, postId);
//      Todo : member의 like check 정보를 포함해서 넘겨줘야함.
        log.info("""
                
                =====================
                ## 게시글 추천&비추천 로직실행
                =====================""");

        return new ResponseEntity<>(likesMapper.LikesToLikesResponseDto(likes),HttpStatus.OK);
    }

    @PostMapping("/comment/{comment_id}/commentUnLikes")
    public ResponseEntity CommentUnLikes(@RequestBody LikesCommentDto likesCommentDto, @PathVariable("comment_id") Long commentId,@PathVariable("post_id") Long postId) {

        Likes likes = likesMapper.LikesCommentDtoToLikes(likesCommentDto);
        likesService.decreaseCommentLikes(likes,commentId,postId);
//      Todo : member의 like check 정보를 포함해서 넘겨줘야함.
        log.info("""
                
                =====================
                ## 댓글 추천&비추천 로직실행
                =====================""");

        return new ResponseEntity<>(likesMapper.LikesToLikesResponseDto(likes),HttpStatus.OK);
    }
}
