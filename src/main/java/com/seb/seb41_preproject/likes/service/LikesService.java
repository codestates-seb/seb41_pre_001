package com.seb.seb41_preproject.likes.service;

import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.comment.repository.CommentRepository;
import com.seb.seb41_preproject.likes.entity.Likes;
import com.seb.seb41_preproject.likes.repository.LikesRepository;
import com.seb.seb41_preproject.post.entity.Post;
import com.seb.seb41_preproject.post.exception.BusinessLogicException;
import com.seb.seb41_preproject.post.exception.ExceptionCode;
import com.seb.seb41_preproject.post.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LikesService {
    private final LikesRepository likesRepository;
    private final PostRepository postRepository;
    private final CommentRepository commentRepository;

    public LikesService(LikesRepository likesRepository, PostRepository postRepository, CommentRepository commentRepository) {
        this.likesRepository = likesRepository;
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
    }

    public void increasePostLikes(Likes likes, Long postId) {
//        TODO : Member entity 완성시 VerifyLikesCheck()를 통해 해당유저가 눌렀었는지 검증하는 로직 작성필요
//        likes.setLikeCheck(1);
//        Todo : 유저의 해당게시물의 라이크체크가 1이면 추천을 눌렀을때 상태를 0으로 바꾸고 추천수를 줄여야함
//        if() {
//            likes.setLikeCheck(0);
//        }
//        verifyMemberLikeCheck()
        Post findPost = FindVerifiedPost(postId);
        int count = findPost.getLikeCount();
        findPost.setLikeCount(count+1);
        likes.setLikeCheck(1);
        likes.setPost(findPost);
        likesRepository.save(likes);
    }

    public void increaseCommentLikes(Likes likes, Long commentId, Long postId) {
        Post findPost = FindVerifiedPost(postId);
        Comment findComment = FindVerifiedComment(commentId);

        int count = findComment.getLikeCount();
        findComment.setLikeCount(count+1);
        likes.setPost(findPost);
        likes.setComment(findComment);
        likesRepository.save(likes);
    }

    private Comment FindVerifiedComment(Long commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        Comment findComment = optionalComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findComment;
    }

    private Post FindVerifiedPost(Long postId) {

        Optional<Post> optionalPost =  postRepository.findById(postId);
        Post findPost = optionalPost.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findPost;
    }
}
