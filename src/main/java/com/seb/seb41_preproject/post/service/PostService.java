package com.seb.seb41_preproject.post.service;

import com.seb.seb41_preproject.post.entity.Post;
import com.seb.seb41_preproject.post.exception.BusinessLogicException;
import com.seb.seb41_preproject.post.exception.ExceptionCode;
import com.seb.seb41_preproject.post.repository.PostRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostService {
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public Post updatePost(Post post) {
        Post findPost = findVerifiedTPost(post.getId());

        Optional.ofNullable(post.getTitle())
                .ifPresent(title -> findPost.setTitle(title));
        Optional.ofNullable(post.getContent())
                .ifPresent(content -> findPost.setContent(content));
        Optional.ofNullable(post.getTag())
                .ifPresent(tag -> findPost.setTag(tag));

        return postRepository.save(findPost);
    }

    public void deletePost(long id) {
        Post findPost = findVerifiedTPost(id);
        postRepository.deleteById(findPost.getId());
    }

    public Page<Post> findPosts(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return postRepository.findAllByOrderByIdDesc(pageRequest);
    }

    public Post findPost(long id) {
        return findVerifiedTPost(id);
    }

    public Post findVerifiedTPost(long id) {
        Optional<Post> optionalPost = postRepository.findById(id);
        Post findPost = optionalPost.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findPost;
    }
}
