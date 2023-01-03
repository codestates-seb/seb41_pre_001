package com.seb.seb41_preproject.comment.controller;

import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.comment.mapper.CommentMapper;
import com.seb.seb41_preproject.comment.service.CommentService;
import com.seb.seb41_preproject.dto.MultiResponseDto;
import com.seb.seb41_preproject.member.dto.MemberDto.MemberPostResponseDto;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.mapper.MemberMapper;
import com.seb.seb41_preproject.member.service.MemberService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import static com.seb.seb41_preproject.comment.dto.CommentDto.*;

@Slf4j
@RestController
@RequestMapping(value = "/board/posts/{post_id}/comment",produces = "application/json")
public class CommentController {

    private final CommentService commentService;
    private final CommentMapper commentMapper;
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    public CommentController(CommentService commentService, CommentMapper commentMapper, MemberService memberService, MemberMapper memberMapper) {
        this.commentService = commentService;
        this.commentMapper = commentMapper;
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @PostMapping
    public ResponseEntity PostComment(@Valid @RequestBody CommentPostDto commentPostDto,
                                      @PathVariable("post_id") Long post_id,
                                      @AuthenticationPrincipal String memberEmail){

        Comment comment = commentMapper.CommentPostDtoToComment(commentPostDto);
        Comment response = commentService.CreateComment(comment, post_id,memberEmail);

        Member findMember = memberService.findMemberByMemberEmail(memberEmail);
        MemberPostResponseDto memberPostResponseDto = memberMapper.MemberToMemberPostResponseDto(findMember);
        Member member = memberMapper.MemberPostResponseDtoToMember(memberPostResponseDto);


        log.info("""
                
                =====================
                ## 댓글 생성됨
                =====================
                
                """);

        return new ResponseEntity<>(
                new MultiResponseDto(commentMapper.CommentToCommentResponseDto(response), member), HttpStatus.CREATED);
    }

    @PatchMapping("/{comment_id}")
    public ResponseEntity UpdateComment(@PathVariable("post_id") Long post_id,
                                        @PathVariable("comment_id")@Positive long commentId,
                                        @Valid @RequestBody CommentPatchDto commentPatchDto,
                                        @AuthenticationPrincipal String memberEmail) {

        commentPatchDto.setId(commentId);
        commentPatchDto.setPostId(post_id);
        Comment comment = commentMapper.CommentPatchDtoToComment(commentPatchDto);
        Comment response = commentService.UpdateComment(comment, post_id, memberEmail);

        Member findMember = memberService.findMemberByMemberEmail(memberEmail);
        MemberPostResponseDto memberPostResponseDto = memberMapper.MemberToMemberPostResponseDto(findMember);
        Member member = memberMapper.MemberPostResponseDtoToMember(memberPostResponseDto);

        log.info("""

                =====================
                ## 댓글 수정됨
                =====================

                """);

        return new ResponseEntity<>(
                new MultiResponseDto(commentMapper.CommentToCommentResponseDto(response), member), HttpStatus.OK);
    }

    @DeleteMapping("/{comment_id}")
    public ResponseEntity DeleteComment(@PathVariable("comment_id") @Positive long commentId) {

        commentService.DeleteComment(commentId);
        log.info("""
                
                =====================
                ## 댓글 삭제됨
                =====================
                
                """);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
