package com.seb.seb41_preproject.member.controller;

import com.seb.seb41_preproject.Security.Dto.MemberLoginRequestDto;
import com.seb.seb41_preproject.Security.Info.TokenInfo;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.mapper.MemberMapper;
import com.seb.seb41_preproject.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.transaction.annotation.Transactional;
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
    public ResponseEntity getUserInfo(@PathVariable("user_id") Long userId) {
        Member responseMember = memberService.findMember(userId);
        log.info("""
                                
                =====================
                ## 멤버 정보 불러오기
                =====================""");
        return new ResponseEntity<>(memberMapper.MemberToMemberResponseDto(responseMember), HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity PostMember(@RequestBody MemberPostDto postDto) {

        Member member = memberMapper.MemberPostDtoToMember(postDto);
        Member responseMember = memberService.createMember(member);
        log.info("""
                                
                =====================
                ## 멤버 가입 완료
                =====================""");
        return new ResponseEntity<>(memberMapper.MemberToMemberResponseDto(responseMember), HttpStatus.CREATED);
    }

    @DeleteMapping("/signout/{user_id}")
    public ResponseEntity DeleteMember(@PathVariable("user_id") Long userId) {
        memberService.deleteMember(userId);
        log.info("""
                                
                =====================
                ## 멤버 탈퇴 완료
                =====================""");
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/login")
    public TokenInfo login(@RequestBody MemberLoginRequestDto memberLoginRequestDto) {
        String memberId = memberLoginRequestDto.getMemberId();
        String password = memberLoginRequestDto.getPassword();
        TokenInfo tokenInfo = memberService.login(memberId, password);
        return tokenInfo;
    }

}
