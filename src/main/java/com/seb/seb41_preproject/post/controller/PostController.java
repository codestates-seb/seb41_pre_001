package com.seb.seb41_preproject.post.controller;

import com.seb.seb41_preproject.post.dto.BoardResponseDto;
import com.seb.seb41_preproject.post.dto.PostAllDto;
import com.seb.seb41_preproject.post.dto.PostPatchDto;
import com.seb.seb41_preproject.post.dto.PostDto;
import com.seb.seb41_preproject.post.entity.Post;
import com.seb.seb41_preproject.post.mapper.PostMapper;
import com.seb.seb41_preproject.post.page.PageInfo;
import com.seb.seb41_preproject.post.service.PostService;
import jakarta.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/board/posts")
@Slf4j
public class PostController {
    private final PostService postService;
    private final PostMapper postMapper;

    public PostController(PostService postService, PostMapper postMapper) {
        this.postService = postService;
        this.postMapper = postMapper;
    }

    @PostMapping
    public ResponseEntity postPost(@RequestBody PostDto postDto) {
        log.info("게시글 작성 완료");

        Post response = postService.createPost(postMapper.postDtoToPost(postDto));

        return new ResponseEntity(postMapper.postToPostResponseDto(response), HttpStatus.CREATED);
    }

    @PatchMapping("/{post_id}")
    public ResponseEntity patchPost(@PathVariable("post_id") long id,
                                    @RequestBody PostPatchDto postPatchDto) {
        log.info("게시글 수정 완료");
        postPatchDto.setId(id);
        postPatchDto.setCreatedAt(postPatchDto.getCreatedAt());

        Post response = postService.updatePost(postMapper.postPatchDtoToPost(postPatchDto));

        return new ResponseEntity(postMapper.postToPostResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping("/{post_id}")
    public ResponseEntity deletePost(@PathVariable("post_id") long id) {

        postService.deletePost(id);
        System.out.printf("deleted post_id : ", id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity getBoard(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size) {
        //page information (page는 0부터 시작하므로 page-1)
        Page<Post> postPage = postService.findPosts(page - 1, size);
        PageInfo pageInfo = new PageInfo(page, size, (int) postPage.getTotalElements(), postPage.getTotalPages());

        //posts 반환 + dto 변환
        List<Post> posts = postPage.getContent();
        List<BoardResponseDto> response =
                posts.stream()
                        .map(post->postMapper.postToBoardResponseDto(post))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(
                new PostAllDto(response, pageInfo), HttpStatus.OK);
    }

    @GetMapping("/{post_id}")
    public ResponseEntity getPost(@PathVariable("post_id") long id) {
        Post response = postService.findPost(id);
        return new ResponseEntity(postMapper.postToPostCommentResponseDto(response), HttpStatus.OK);
    }
}
