package com.seb.seb41_preproject.comment.controller;

import com.seb.seb41_preproject.comment.dto.CommentDto;
import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.comment.mapper.CommentMapper;
import com.seb.seb41_preproject.comment.service.CommentService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.seb.seb41_preproject.comment.dto.CommentDto.*;

@Slf4j
@RestController
@RequestMapping(value = "/board/posts/{post_id}",produces = "application/json")
public class CommentController {

    private final CommentService commentService;
    private final CommentMapper commentMapper;

    public CommentController(CommentService commentService, CommentMapper commentMapper) {
        this.commentService = commentService;
        this.commentMapper = commentMapper;
    }

    @PostMapping("/comment")
    public ResponseEntity PostComment(@Valid @RequestBody CommentPostDto commentPostDto,
                                      @PathVariable("post_id") Long post_id){

        Comment comment = commentMapper.CommentPostDtoToComment(commentPostDto);
        Comment response = commentService.CreateComment(comment, post_id);
        log.info(" test : 댓글이 생성됨 ");

        return new ResponseEntity<>(commentMapper.CommentToCommentResponseDto(response), HttpStatus.CREATED);
    }

    @PatchMapping("/comment/{comment_id}")
    public ResponseEntity UpdateComment(@PathVariable("comment_id")@Positive long commentId,
                                        @Valid @RequestBody CommentPatchDto commentPatchDto) {

        commentPatchDto.setId(commentId);
        Comment response = commentService.UpdateComment(commentMapper.CommentPatchDtoToComment(commentPatchDto));
        log.info(" test : 댓글이 수정됨 ");

        return new ResponseEntity<>(commentMapper.CommentToCommentResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping("/comment/{comment_id}")
    public ResponseEntity DeleteComment(@PathVariable("comment_id") @Positive long commentId) {

        commentService.DeleteComment(commentId);
        log.info(" test : 댓글이 삭제됨");

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
