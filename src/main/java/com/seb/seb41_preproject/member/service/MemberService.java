package com.seb.seb41_preproject.member.service;

import com.seb.seb41_preproject.auth.MemberAuthorityUtils;
import com.seb.seb41_preproject.exception.BusinessLogicException;
import com.seb.seb41_preproject.exception.ExceptionCode;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Slf4j
@Transactional
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final MemberAuthorityUtils authorityUtils;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, MemberAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }


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
}
