package com.seb.seb41_preproject.member.controller;


import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.mapper.MemberMapper;
import com.seb.seb41_preproject.member.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import static com.seb.seb41_preproject.member.dto.MemberDto.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class MemberController {

    private final MemberMapper memberMapper;
    private final MemberService memberService;

    @GetMapping("/{user_id}")
    public ResponseEntity getUserInfo(@PathVariable("user_id") Long userId, @AuthenticationPrincipal String memberEmail) {
        Member responseMember = memberService.findMember(userId,memberEmail);
        log.info("""
                                
                =====================
                ## 멤버 정보 불러오기
                =====================""");
        return new ResponseEntity<>(memberMapper.MemberToMemberResponseDto(responseMember), HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity PostMember(@Valid @RequestBody MemberPostDto postDto) {

        Member member = memberMapper.MemberPostDtoToMember(postDto);
        Member responseMember = memberService.createMember(member);
        log.info("""
                                
                =====================
                ## 멤버 가입 완료
                =====================
                
                """);
        return new ResponseEntity<>(memberMapper.MemberToMemberResponseDto(responseMember), HttpStatus.CREATED);
    }

    @DeleteMapping("/signout/{user_id}")
    public ResponseEntity DeleteMember(@PathVariable("user_id") Long userId, @AuthenticationPrincipal String memberEmail) {
        memberService.deleteMember(userId,memberEmail);
        log.info("""
                                
                =====================
                ## 멤버 탈퇴 완료
                =====================
                
                """);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PatchMapping("/logout/{user_id}")
    public ResponseEntity logout(@PathVariable("user_id") Long userId) {
        memberService.logoutMember(userId);

        log.info("""
                                
                =====================
                ## 로그아웃 완료
                =====================""");
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
