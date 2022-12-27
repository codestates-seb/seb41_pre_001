package com.seb.seb41_preproject.Security.Controller;

import com.seb.seb41_preproject.Security.Dto.MemberLoginRequestDto;
import com.seb.seb41_preproject.Security.Info.TokenInfo;
import com.seb.seb41_preproject.Security.Service.MemberService_s1;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController_s1 {
    private final MemberService_s1 memberService;

    @PostMapping("/login")
    public TokenInfo login(@RequestBody MemberLoginRequestDto memberLoginRequestDto) {
        String memberId = memberLoginRequestDto.getMemberId();
        String password = memberLoginRequestDto.getPassword();
        TokenInfo tokenInfo = memberService.login(memberId, password);
        return tokenInfo;
    }
}