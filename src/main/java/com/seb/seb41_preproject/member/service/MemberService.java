package com.seb.seb41_preproject.member.service;

import com.seb.seb41_preproject.Security.Info.TokenInfo;
import com.seb.seb41_preproject.Security.Provider.JwtTokenProvider;
import com.seb.seb41_preproject.exception.BusinessLogicException;
import com.seb.seb41_preproject.exception.ExceptionCode;
import com.seb.seb41_preproject.member.controller.MemberAuthorityUtils;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Slf4j
@Transactional(readOnly = true)
@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final MemberAuthorityUtils authorityUtils;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;



    public Member createMember(Member member) {

        verifyExistUserEmail(member.getUserEmail());
        String encryptedPassword = passwordEncoder.encode(member.getUserPassword());
        member.setUserPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(member.getUserEmail());
        member.setRoles(List.of(roles.toString()));

        return memberRepository.save(member);
    }

    private void verifyExistUserEmail(String userEmail) {
        Optional<Member> member = memberRepository.findByUserEmail(userEmail);
        if(member.isPresent()) throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    public Member findMember(Long userId) {
        return verifyExistUserId(userId);
    }

    private Member verifyExistUserId(Long userId) {
        Optional<Member> optionalMember = memberRepository.findById(userId);
        return optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    public void deleteMember(Long userId) {

        Optional<Member> optionalMember = memberRepository.findById(userId);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        memberRepository.delete(findMember);
    }
    @Transactional
    public TokenInfo login(String memberId, String password) {
        // 1. Login ID/PW 를 기반으로 Authentication 객체 생성
        // 이때 authentication 는 인증 여부를 확인하는 authenticated 값이 false
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(memberId, password);

        // 2. 실제 검증 (사용자 비밀번호 체크)이 이루어지는 부분
        // authenticate 매서드가 실행될 때 CustomUserDetailsService 에서 만든 loadUserByUsername 메서드가 실행
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);

        return tokenInfo;
    }
}
