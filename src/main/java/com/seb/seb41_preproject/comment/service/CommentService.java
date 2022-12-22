package com.seb.seb41_preproject.comment.service;

import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.comment.repository.CommentRepository;
import com.seb.seb41_preproject.exception.BusinessLogicException;
import com.seb.seb41_preproject.exception.ExceptionCode;
import com.seb.seb41_preproject.post.entity.Post;
import com.seb.seb41_preproject.post.repository.PostRepository;
import org.springframework.stereotype.Service;

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
        Post findPost = findVerifiedPost(postId);
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
        Comment findComment = comment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return findComment;
    }

    private Post findVerifiedPost(Long postId) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        Post findPost = optionalPost.orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
        return findPost;
    }
}
