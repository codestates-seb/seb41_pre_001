package com.seb.seb41_preproject.likes.controller;

import com.seb.seb41_preproject.dto.MultiResponseDto;
import com.seb.seb41_preproject.likes.dto.LikesDto.LikesCommentDto;
import com.seb.seb41_preproject.likes.dto.LikesDto.LikesPostDto;
import com.seb.seb41_preproject.likes.entity.Likes;
import com.seb.seb41_preproject.likes.mapper.LikesMapper;
import com.seb.seb41_preproject.likes.repository.LikesRepository;
import com.seb.seb41_preproject.likes.service.LikesService;
import com.seb.seb41_preproject.member.dto.MemberDto;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.mapper.MemberMapper;
import com.seb.seb41_preproject.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/board/posts/{post_id}")
public class LikesController {
    private final LikesService likesService;
    private final LikesMapper likesMapper;
    private final LikesRepository likesRepository;
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    public LikesController(LikesService likesService, LikesMapper likesMapper, LikesRepository likesRepository, MemberService memberService, MemberMapper memberMapper) {
        this.likesService = likesService;
        this.likesMapper = likesMapper;
        this.likesRepository = likesRepository;
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @PostMapping("/postLikes")
    public ResponseEntity PostLikes(@RequestBody LikesPostDto likesPostDto, @PathVariable("post_id") Long postId,
                                    @AuthenticationPrincipal String userEmail) {

        Likes likes = likesMapper.LikesPostDtoToLikes(likesPostDto);
        int likeCheck = likesService.getLikeCheck(postId, userEmail);
        likesService.increasePostLikes(likes, postId, userEmail, likeCheck);

        Member findMember = memberService.findMemberByMemberEmail(userEmail);
        MemberDto.MemberPostResponseDto memberPostResponseDto = memberMapper.MemberToMemberPostResponseDto(findMember);
        Member member = memberMapper.MemberPostResponseDtoToMember(memberPostResponseDto);

        log.info("""
                                
                =====================
                ## 게시글 추천&비추천 로직실행
                =====================
                                
                """);

        return new ResponseEntity<>(
                new MultiResponseDto(likesMapper.LikesToLikesResponseDto(likes), member), HttpStatus.OK);
    }

    @PostMapping("/postUnLikes")
    public ResponseEntity PostUnLikes(@RequestBody LikesPostDto likesPostDto, @PathVariable("post_id") Long postId,
                                      @AuthenticationPrincipal String userEmail) {

        Likes likes = likesMapper.LikesPostDtoToLikes(likesPostDto);
        int likeCheck = likesService.getLikeCheck(postId, userEmail);
        likesService.decreasePostLikes(likes, postId, userEmail, likeCheck);

        Member findMember = memberService.findMemberByMemberEmail(userEmail);
        MemberDto.MemberPostResponseDto memberPostResponseDto = memberMapper.MemberToMemberPostResponseDto(findMember);
        Member member = memberMapper.MemberPostResponseDtoToMember(memberPostResponseDto);

        log.info("""
                                
                =====================
                ## 게시글 추천&비추천 로직실행
                =====================
                                
                """);

        return new ResponseEntity<>(
                new MultiResponseDto(likesMapper.LikesToLikesResponseDto(likes), member), HttpStatus.OK);
    }

    @PostMapping("/comment/{comment_id}/commentLikes")
    public ResponseEntity CommentLikes(@RequestBody LikesCommentDto likesCommentDto,
                                       @PathVariable("comment_id") Long commentId, @PathVariable("post_id") Long postId,
                                       @AuthenticationPrincipal String userEmail) {

        Likes likes = likesMapper.LikesCommentDtoToLikes(likesCommentDto);
        int likeCheck = likesService.getCommentLikeCheck(postId, userEmail, commentId);

        likesService.increaseCommentLikes(likes, commentId, postId, userEmail, likeCheck);

        Member findMember = memberService.findMemberByMemberEmail(userEmail);
        MemberDto.MemberPostResponseDto memberPostResponseDto = memberMapper.MemberToMemberPostResponseDto(findMember);
        Member member = memberMapper.MemberPostResponseDtoToMember(memberPostResponseDto);

        log.info("""
                                
                =====================
                ## 댓글 추천&비추천 로직실행
                =====================
                                        
                """);

        return new ResponseEntity<>(new MultiResponseDto(likesMapper.LikesToLikesResponseDto(likes), member), HttpStatus.OK);
    }


    @PostMapping("/comment/{comment_id}/commentUnLikes")
    public ResponseEntity CommentUnLikes(@RequestBody LikesCommentDto likesCommentDto, @PathVariable("comment_id") Long commentId, @PathVariable("post_id") Long postId, @AuthenticationPrincipal String userEmail) {

        Likes likes = likesMapper.LikesCommentDtoToLikes(likesCommentDto);
        int likeCheck = likesService.getCommentLikeCheck(postId, userEmail, commentId);
        likesService.decreaseCommentLikes(likes, commentId, postId, likeCheck, userEmail);

        Member findMember = memberService.findMemberByMemberEmail(userEmail);
        MemberDto.MemberPostResponseDto memberPostResponseDto = memberMapper.MemberToMemberPostResponseDto(findMember);
        Member member = memberMapper.MemberPostResponseDtoToMember(memberPostResponseDto);
//      Todo : member의 like check 정보를 포함해서 넘겨줘야함.
        log.info("""
                                
                =====================
                ## 댓글 추천&비추천 로직실행
                =====================""");

        return new ResponseEntity<>(new MultiResponseDto(likesMapper.LikesToLikesResponseDto(likes), member), HttpStatus.OK);
    }
}
