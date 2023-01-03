package com.seb.seb41_preproject.comment.service;

import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.comment.repository.CommentRepository;
import com.seb.seb41_preproject.exception.BusinessLogicException;
import com.seb.seb41_preproject.exception.ExceptionCode;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.repository.MemberRepository;
import com.seb.seb41_preproject.member.service.MemberService;
import com.seb.seb41_preproject.post.entity.Post;
import com.seb.seb41_preproject.post.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final PostRepository postRepository;
    private final MemberRepository memberRepository;
    private final MemberService memberService;

    public CommentService(CommentRepository commentRepository, PostRepository postRepository,
                          MemberRepository memberRepository, MemberService memberService) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
        this.memberRepository = memberRepository;
        this.memberService = memberService;
    }

    public Comment CreateComment(Comment comment, Long postId, String memberEmail) {

        Member findMember = findVerifiedMember(memberEmail);
        Post findPost = findVerifiedPost(postId);

        setCommentInfo(comment, findMember, findPost);

        return commentRepository.save(comment);
    }

    public Comment UpdateComment(Comment comment, Long postId, String memberEmail) {

        Member findMember = findVerifiedMember(memberEmail);
        Post findPost = findVerifiedPost(postId);
        Comment findComment = findVerifiedComment(comment.getId());

        //수정하는 멤버와 작성한 멤버가 같은지 확인
        if(memberService.getLoginMember().getId() != findMember.getId())
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED);

        Optional.ofNullable(comment.getContent()).ifPresent(Content -> findComment.setContent(Content));
        comment.setCreatedAt(LocalDateTime.now());

        setCommentInfo(findComment,findMember,findPost);

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
    private Member findVerifiedMember(String memberEmail) {
        Optional<Member> byUserEmail = memberRepository.findByUserEmail(memberEmail);
        Member member = byUserEmail.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return member;
    }
    private static void setCommentInfo(Comment comment, Member findMember, Post findPost) {
        String userImageUrl = findMember.getUserImageUrl();
        String userName = findMember.getUserName();
        Long memberId = findMember.getId();
        comment.setUserId(memberId);
        comment.setPost(findPost);
        comment.setMember(findMember);
        comment.setUserImageUrl(userImageUrl);
        comment.setUserName(userName);
    }
}
