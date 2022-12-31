package com.seb.seb41_preproject.post.service;

import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.service.MemberService;
import com.seb.seb41_preproject.post.repository.PostRepository;
import com.seb.seb41_preproject.exception.BusinessLogicException;
import com.seb.seb41_preproject.exception.ExceptionCode;
import com.seb.seb41_preproject.post.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@Service
public class PostService {
    private final PostRepository postRepository;
    private final MemberService memberService;

    public PostService(PostRepository postRepository, MemberService memberService) {
        this.postRepository = postRepository;
        this.memberService = memberService;
    }

    public Post createPost(Post post) {
        //tag를 예쁘게 저장하기 위해(형식 규격화, 소문자 변환, 중복제거)
        post.setTag(Arrays.stream(post.getTag().toLowerCase().replaceAll(" ", "").split(","))
                .distinct()
                .collect(Collectors.joining(", ")));
        //tag를 잘라 List tags에 저장
        post.setTags(Arrays.asList(post.getTag().split(", ")));
        post.setViews(1);

        //로그인 중인 멤버로 작성
        Member loginMember = memberService.getLoginMember();
        post.setMember(loginMember);
        post.setUserName(loginMember.getUserName());

        return postRepository.save(post);
    }

    public Post updatePost(Post post) {
        Post findPost = findVerifiedPost(post.getId());

        //수정하는 멤버와 작성한 멤버가 같은지 확인
        Member postMember = memberService.verifyExistUserId(findPost.getMember().getId());
        if(memberService.getLoginMember().getId() != postMember.getId())
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED);

        findPost.setCreatedAt(findPost.getCreatedAt());
        findPost.setViews(findPost.getViews()+1);

        Optional.ofNullable(post.getTitle())
                .ifPresent(title -> findPost.setTitle(title));
        Optional.ofNullable(post.getContent())
                .ifPresent(content -> findPost.setContent(content));
        Optional.ofNullable(post.getTag())
                .ifPresent(tag -> findPost.setTag(tag));

        //tag 저장
        findPost.setTag(Arrays.stream(findPost.getTag().toLowerCase().replaceAll(" ", "").split(","))
                .distinct()
                .collect(Collectors.joining(", ")));
        //List tag 생성 (처음 리스트를 만들때 new로 만든게 아니라 수정하려면 오류가 나므로 새로 생성해서 저장)
        findPost.setTags(new ArrayList<>(Arrays.asList(findPost.getTag().split(", "))));

        return postRepository.save(findPost);
    }

    public void deletePost(long id) {
        Post findPost = findVerifiedPost(id);

        //삭제하는 멤버와 작성한 멤버가 같은지 확인
        Member postMember = memberService.verifyExistUserId(findPost.getMember().getId());
        if(memberService.getLoginMember().getId() != postMember.getId())
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED);

        postRepository.deleteById(findPost.getId());
    }

    public Page<Post> findPosts(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return postRepository.findAllByOrderByIdDesc(pageRequest);
    }

    public Post findPost(long id) {
        Post findPost = findVerifiedPost(id);
        findPost.setViews(findPost.getViews()+1);

        //views를 저장하기 위해 save
        postRepository.save(findPost);

        return findVerifiedPost(id);
    }

    public Post findVerifiedPost(long id) {
        Optional<Post> optionalPost = postRepository.findById(id);
        Post findPost = optionalPost.orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));

        return findPost;
    }
}