package com.seb.seb41_preproject.likes.service;

import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.comment.repository.CommentRepository;
import com.seb.seb41_preproject.exception.BusinessLogicException;
import com.seb.seb41_preproject.exception.ExceptionCode;
import com.seb.seb41_preproject.likes.entity.Likes;
import com.seb.seb41_preproject.likes.repository.LikesRepository;
import com.seb.seb41_preproject.post.entity.Post;
import com.seb.seb41_preproject.post.repository.PostRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
@Slf4j
@Service
@Transactional
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

//      TODO : Member entity 완성시 VerifyLikesCheck()를 통해 해당유저가 눌렀었는지 검증하는 로직 작성필요
        Post findPost = FindVerifiedPost(postId);
        int count = findPost.getLikeCount();

      /*
      * JwtToken 개발완료시 -> postid와 memberid 를 AND조건으로 한 Likes 테이블에서 Likecheck의 값을 판단하고,
      * 동일한 요청이 두 번 왔을 때 처리로직 추가 해야함.
      *
      */
        try {

            Optional<Likes> optionalLikes = likesRepository.existsLikes(postId);
            Likes findLikes = optionalLikes.orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_EXISTS));

        } catch (BusinessLogicException e) {
            Optional<Likes> optionalLikes = likesRepository.existsLikes(postId);
            Likes findLikes = optionalLikes.orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_EXISTS));
            likes.setCount(count - 1);
            likesRepository.delete(findLikes);
            likesRepository.save(likes);
        }
            findPost.setLikeCount(count + 1);
            likes.setLikeCheck(1);
            likes.setPost(findPost);

            likesRepository.save(likes);

//        }else {
//
////          Likes updateLikes = likesRepository.findById(likes.getId()).orElseThrow( ()-> New BusinessLogicException(ExceptionCode.POST_EXISTS));
////            updateLikes.updateLikesCount(count -1);
////            setter 사용을 줄이려면 이런로직으로 짜야겠다
////
//
//            Optional<Likes> optionalLikes = likesRepository.existsLikes(postId);
//            Likes findLikes = optionalLikes.orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_EXISTS));
//            findPost.setLikeCount(count - 1);
//            likes.setLikeCheck(1);
//            likes.setPost(findPost);
//
//
//        }
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


//    게시글 비추천 기능
    public void decreasePostLikes(Likes likes, Long postId) {

//      TODO : Member entity 완성시 VerifyLikesCheck()를 통해 해당유저가 눌렀었는지 검증하는 로직 작성필요
        Post findPost = FindVerifiedPost(postId);
        int count = findPost.getLikeCount();

        /*
         * JwtToken 개발완료시 -> memberid 로 Likes 테이블에서 Likecheck의 값을 판단하고,
         * 동일한 요청이 두 번 올때의( 처음엔 -1 , 그다음엔 +1)처리를 해야함.
         * 해당 메서드는 비추천 기능임.
         */
        if (likes.getLikeCheck() == 0) {

            findPost.setLikeCount(count - 1);
            likes.setLikeCheck(1);
            likes.setPost(findPost);

            likesRepository.save(likes);

        }else {
            Optional<Likes> optionalLikes = likesRepository.existsLikes(postId);
            Likes findLikes = optionalLikes.orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_EXISTS));
            findPost.setLikeCount(count + 1);
            likes.setLikeCheck(1);
            likes.setPost(findPost);


        }
    }
//  댓글 비추천 기능
    public void decreaseCommentLikes(Likes likes, Long commentId, Long postId) {
        Post findPost = FindVerifiedPost(postId);
        Comment findComment = FindVerifiedComment(commentId);

        int count = findComment.getLikeCount();
        findComment.setLikeCount(count - 1);
        likes.setPost(findPost);
        likes.setComment(findComment);
        likesRepository.save(likes);
    }

    private Comment FindVerifiedComment(Long commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        Comment findComment = optionalComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
        return findComment;
    }

    private Post FindVerifiedPost(Long postId) {

        Optional<Post> optionalPost =  postRepository.findById(postId);
        Post findPost = optionalPost.orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
        return findPost;
    }

}
