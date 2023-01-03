package com.seb.seb41_preproject.post.controller;

import com.seb.seb41_preproject.dto.MultiResponseDto;
import com.seb.seb41_preproject.member.dto.MemberDto;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.mapper.MemberMapper;
import com.seb.seb41_preproject.member.service.MemberService;
import com.seb.seb41_preproject.post.dto.*;
import com.seb.seb41_preproject.post.entity.Post;
import com.seb.seb41_preproject.post.mapper.PostMapper;
import com.seb.seb41_preproject.post.page.PageInfo;
import com.seb.seb41_preproject.post.service.PostService;
import jakarta.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static com.seb.seb41_preproject.member.dto.MemberDto.*;

@RestController
@RequestMapping("/board/posts")
@Slf4j
public class PostController {
    private final PostService postService;
    private final PostMapper postMapper;
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    public PostController(PostService postService, PostMapper postMapper, MemberService memberService, MemberMapper memberMapper) {
        this.postService = postService;
        this.postMapper = postMapper;
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @PostMapping
    public ResponseEntity postPost(@RequestBody PostDto postDto,
                                   @AuthenticationPrincipal String memberEmail) {

        Post response = postService.createPost(postMapper.postDtoToPost(postDto));
        Member findMember = memberService.findMemberByMemberEmail(memberEmail);

        MemberPostResponseDto memberPostResponseDto = memberMapper.MemberToMemberPostResponseDto(findMember);
        Member member = memberMapper.MemberPostResponseDtoToMember(memberPostResponseDto);

        log.info("""
                                
                =====================
                ## 게시물 작성 완료
                =====================
                
                """);

        return new ResponseEntity(
                new MultiResponseDto(postMapper.postToPostResponseDto(response),member), HttpStatus.CREATED);
    }

    @PatchMapping("/{post_id}")
    public ResponseEntity patchPost(@PathVariable("post_id") long id,
                                    @RequestBody PostPatchDto postPatchDto) {
        postPatchDto.setId(id);
        Post response = postService.updatePost(postMapper.postPatchDtoToPost(postPatchDto));

        log.info("""
                                
                =====================
                ## 게시물 수정 완료
                =====================""");
        return new ResponseEntity(postMapper.postToPostResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping("/{post_id}")
    public ResponseEntity deletePost(@PathVariable("post_id") long id) {
        postService.deletePost(id);

        log.info("""
                                
                =====================
                ## 게시물 삭제 완료
                =====================""");
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

        log.info("""
                                
                =====================
                ## 전체 게시판 조회
                =====================""");
        return new ResponseEntity<>(
                new PostAllDto(response, pageInfo), HttpStatus.OK);
    }

    @GetMapping("/{post_id}")
    public ResponseEntity getPost(@PathVariable("post_id") long id) {

        Post response = postService.findPost(id);
        Member member1 = response.getMember();
        MemberPostResponseDto memberPostResponseDto = memberMapper.MemberToMemberPostResponseDto(member1);
        Member member = memberMapper.MemberPostResponseDtoToMember(memberPostResponseDto);

        log.info("""
                                
                =====================
                ## 특정 게시글 조회
                =====================""");

        return new ResponseEntity(
                new MultiResponseDto(postMapper.postToPostCommentResponseDto(response), member),HttpStatus.OK);
    }
}