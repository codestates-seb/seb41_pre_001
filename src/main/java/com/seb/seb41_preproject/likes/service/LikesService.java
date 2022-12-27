package com.seb.seb41_preproject.likes.service;

import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.comment.repository.CommentRepository;
import com.seb.seb41_preproject.exception.BusinessLogicException;
import com.seb.seb41_preproject.exception.ExceptionCode;
import com.seb.seb41_preproject.likes.entity.Likes;
import com.seb.seb41_preproject.likes.repository.LikesRepository;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.repository.MemberRepository;
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

    private final MemberRepository memberRepository;

    public LikesService(LikesRepository likesRepository, PostRepository postRepository, CommentRepository commentRepository, MemberRepository memberRepository) {
        this.likesRepository = likesRepository;
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
        this.memberRepository = memberRepository;
    }

    public int getLikeCheck(Likes likes, Long postId, String userEmail) {

        Post findPost = findVerifiedPost(postId);
        Member findMember = findVerifyMember(userEmail);
        Long memberId = findMember.getId();

        Optional<Integer> likeCheck = likesRepository.findLikeCheck(postId, memberId);

        if (likeCheck.isEmpty()) {
            return 0;
        }
        return likeCheck.get();
    }

    public void increasePostLikes(Likes likes, Long postId, String userEmail, int likeCheck) {

        Post findPost = findVerifiedPost(postId);
        Member findMember = findVerifyMember(userEmail);

        int count = findPost.getLikeCount();
        Long memberId = findMember.getId();

        Optional<Likes> optionalLikes = likesRepository.existsLikes(postId, memberId);
        Likes findLike = optionalLikes.orElse(likes);

//      TODO : Member entity 완성시 VerifyLikesCheck()를 통해 해당유저가 눌렀었는지 검증하는 로직 작성필요

        if (likeCheck == 0) {

            likes.setPost(findPost);
            likes.setLikeCheck(1);
            likes.setMember(findMember);
            likes.setCount(likes.getCount());
            findPost.setLikeCount(count + 1);
            likesRepository.save(likes);

        } else if (likeCheck == 2) {

            findLike.setCount(findLike.getCount() + 1);
            findLike.setLikeCheck(1);
            findPost.setLikeCount(count + 1);

            likesRepository.save(findLike);
        }  else if (likeCheck == 3) {

            findLike.setLikeCheck(1);
            findLike.setCount(findLike.getCount()+1);
            findPost.setLikeCount(count + 1);

            likesRepository.save(findLike);
        } else if (likeCheck == 4) {

            findLike.setLikeCheck(1);
            findLike.setCount(findLike.getCount()+1);
            findPost.setLikeCount(count + 1);

            likesRepository.save(findLike);
        }else if (likeCheck == 1) {


            findLike.setCount(findLike.getCount() - 1);
            findLike.setLikeCheck(2);
            findPost.setLikeCount(count - 1);

            likesRepository.save(findLike);
        }
    }


    public void increaseCommentLikes(Likes likes, Long commentId, Long postId, String userEmail, int likeCheck) {
        Comment findComment = findVerifiedComment(commentId);
        Member findMember = findVerifyMember(userEmail);
        int count = findComment.getLikeCount();
        Long memberId = findMember.getId();
        Optional<Likes> optionalLikes = likesRepository.existsLikes(postId, memberId);
        Likes findLike = optionalLikes.orElse(likes);

        if (likeCheck == 0) {

            likes.setComment(findComment);
            likes.setLikeCheck(1);
            likes.setMember(findMember);
            likes.setCount(likes.getCount());
            findComment.setLikeCount(count + 1);
            likesRepository.save(likes);

        } else if (likeCheck == 2) {

            findLike.setCount(findLike.getCount() + 1);
            findLike.setLikeCheck(1);
            findComment.setLikeCount(count + 1);

            likesRepository.save(findLike);
        }  else if (likeCheck == 3) {

            findLike.setLikeCheck(1);
            findLike.setCount(findLike.getCount()+1);
            findComment.setLikeCount(count + 1);

            likesRepository.save(findLike);
        } else if (likeCheck == 4) {

            findLike.setLikeCheck(1);
            findLike.setCount(findLike.getCount()+1);
            findComment.setLikeCount(count + 1);

            likesRepository.save(findLike);
        }else if (likeCheck == 1) {


            findLike.setCount(findLike.getCount() - 1);
            findLike.setLikeCheck(2);
            findComment.setLikeCount(count - 1);

            likesRepository.save(findLike);
        }
    }


    //    게시글 비추천 기능
    public void decreasePostLikes(Likes likes, Long postId, String userEmail, int likeCheck) {

        Post findPost = findVerifiedPost(postId);
        Member findMember = findVerifyMember(userEmail);
        int count = findPost.getLikeCount();
        Long memberId = findMember.getId();
        Optional<Likes> optionalLikes = likesRepository.existsLikes(postId, memberId);
        Likes findLike = optionalLikes.orElse(likes);

        if (likeCheck == 0) {

            likes.setPost(findPost);
            likes.setLikeCheck(3);
            likes.setMember(findMember);
            likes.setCount(likes.getCount());
            findPost.setLikeCount(count - 1);

            likesRepository.save(likes);
        } else if (likeCheck == 1) {

            findLike.setLikeCheck(2);
            findLike.setCount(findLike.getCount() - 1);
            findPost.setLikeCount(count - 1);

            likesRepository.save(findLike);
        } else if (likeCheck == 3) {
            findLike.setCount(findLike.getCount()+1);
            findLike.setLikeCheck(4);
            findPost.setLikeCount(count + 1);

            likesRepository.save(findLike);
        } else if (likeCheck == 4) {

            findLike.setCount(findLike.getCount()-1);
            findLike.setLikeCheck(3);
            findPost.setLikeCount(count - 1);

            likesRepository.save(findLike);
        } else if(likeCheck == 2){

            findLike.setCount(findLike.getCount()-1);
            findLike.setLikeCheck(3);
            findPost.setLikeCount(count - 1);

            likesRepository.save(findLike);
        }
    }

    //  댓글 비추천 기능
    public void decreaseCommentLikes(Likes likes, Long commentId, Long postId, int likeCheck, String userEmail) {
        Comment findComment = findVerifiedComment(commentId);
        Member findMember = findVerifyMember(userEmail);
        int count = findComment.getLikeCount();
        Long memberId = findMember.getId();
        Optional<Likes> optionalLikes = likesRepository.existsLikes(postId, memberId);
        Likes findLike = optionalLikes.orElse(likes);

        if (likeCheck == 0) {

            likes.setComment(findComment);
            likes.setLikeCheck(3);
            likes.setMember(findMember);
            likes.setCount(likes.getCount());
            findComment.setLikeCount(count - 1);

            likesRepository.save(likes);
        } else if (likeCheck == 1) {

            findLike.setLikeCheck(2);
            findLike.setCount(findLike.getCount() - 1);
            findComment.setLikeCount(count - 1);

            likesRepository.save(findLike);
        } else if (likeCheck == 3) {
            findLike.setCount(findLike.getCount()+1);
            findLike.setLikeCheck(4);
            findComment.setLikeCount(count + 1);

            likesRepository.save(findLike);
        } else if (likeCheck == 4) {

            findLike.setCount(findLike.getCount()-1);
            findLike.setLikeCheck(3);
            findComment.setLikeCount(count - 1);

            likesRepository.save(findLike);
        } else if(likeCheck == 2){

            findLike.setCount(findLike.getCount()-1);
            findLike.setLikeCheck(3);
            findComment.setLikeCount(count - 1);

            likesRepository.save(findLike);
        }
    }


    private Comment findVerifiedComment(Long commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        Comment findComment = optionalComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
        return findComment;
    }

    private Post findVerifiedPost(Long postId) {

        Optional<Post> optionalPost = postRepository.findById(postId);
        Post findPost = optionalPost.orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
        return findPost;
    }

    private Member findVerifyMember(String userEmail) {

        Optional<Member> byUserEmail = memberRepository.findByUserEmail(userEmail);
        Member member = byUserEmail.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return member;
    }
}
