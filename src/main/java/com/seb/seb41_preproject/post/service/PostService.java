package com.seb.seb41_preproject.post.service;

import com.seb.seb41_preproject.exception.BusinessLogicException;
import com.seb.seb41_preproject.exception.ExceptionCode;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.repository.MemberRepository;
import com.seb.seb41_preproject.post.entity.Post;
import com.seb.seb41_preproject.post.repository.PostRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final MemberRepository memberRepository;

    public PostService(PostRepository postRepository, MemberRepository memberRepository) {
        this.postRepository = postRepository;
        this.memberRepository = memberRepository;
    }

    public Post createPost(Post post, String username) {

        Optional<Member> member = memberRepository.findByUserEmail(username);
        Member findMember = member.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        post.setMember(findMember);
        setTag(post);

        return postRepository.save(post);
    }


    private static void setTag(Post post) {
        post.setTags(Arrays.asList(post.getTag().split(",")));
    }

    private void findMember(Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);

        Member member = optionalMember.orElseThrow(()->new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    public Post updatePost(Post post) {
        Post findPost = findVerifiedPost(post.getId());

        findPost.setCreatedAt(findPost.getCreatedAt());
        findPost.setViews(findPost.getViews()+1);

        Optional.ofNullable(post.getTitle())
                .ifPresent(title -> findPost.setTitle(title));
        Optional.ofNullable(post.getContent())
                .ifPresent(content -> findPost.setContent(content));
        Optional.ofNullable(post.getTag())
                .ifPresent(tag -> findPost.setTags(new ArrayList<>(List.of(tag.replaceAll(" ", "").split(",")))));

        if(post.getTag().replaceAll(" ", "")!=findPost.getTag()) {

        }
        return postRepository.save(findPost);
    }

    public void deletePost(long id) {
        Post findPost = findVerifiedPost(id);
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
