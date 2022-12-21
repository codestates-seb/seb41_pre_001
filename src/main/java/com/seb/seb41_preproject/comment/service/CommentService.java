package com.seb.seb41_preproject.comment.service;

import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.comment.repository.CommentRepository;
import com.seb.seb41_preproject.post.entity.Post;
import com.seb.seb41_preproject.post.exception.BusinessLogicException;
import com.seb.seb41_preproject.post.exception.ExceptionCode;
import com.seb.seb41_preproject.post.repository.PostRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final PostRepository postRepository;

    public CommentService(CommentRepository commentRepository, PostRepository postRepository) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
    }

    public Comment CreateComment(Comment comment, Long postId) {
//    TODO: db 에서 post 를 찾아온다음 해당 post를 DB에 추가해야함 : 로컬에서 생성해서 테스트한 결과 성공
        Optional<Post> optionalPost = postRepository.findById(postId);
        Post findPost = optionalPost.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        comment.setPost(findPost);
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
        Comment findComment = comment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findComment;
    }
}
