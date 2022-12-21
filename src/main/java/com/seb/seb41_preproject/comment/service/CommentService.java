package com.seb.seb41_preproject.comment.service;

import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.comment.repository.CommentRepository;
import com.seb.seb41_preproject.post.entity.Post;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment CreateComment(Comment comment, Long postId) {
//    TODO: db 에서 post 를 찾아온다음 해당 post를 DB에 추가해야함 : 로컬에서 생성해서 테스트한 결과 성공

        return commentRepository.save(comment);
    }

    public Comment UpdateComment(Comment comment) {
        Comment findComment = findVerifiedComment(comment.getId());
        Optional.ofNullable(comment.getContent()).ifPresent(Content -> findComment.setContent(Content));

        return commentRepository.save(findComment);
    }

    public void DeleteComment(long comment_id) {

        Comment comment = findVerifiedComment(comment_id);
        commentRepository.delete(comment);
    }

    private Comment findVerifiedComment(long comment_id) {

        Optional<Comment> comment = commentRepository.findById(comment_id);
        Comment findComment = comment.orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));

        return findComment;
    }
}
