package com.seb.seb41_preproject.member.service;

import com.seb.seb41_preproject.auth.utils.CustomAuthorityUtils;
import com.seb.seb41_preproject.event.MemberRegistrationApplicationEvent;
import com.seb.seb41_preproject.exception.BusinessLogicException;
import com.seb.seb41_preproject.exception.ExceptionCode;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Slf4j
@Transactional
@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final ApplicationEventPublisher publisher;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;


    public Member createMember(Member member) {

        verifyExistUserEmail(member.getUserEmail());

        //Password 암호화
        String encryptedPassword = passwordEncoder.encode(member.getUserPassword());
        member.setUserPassword(encryptedPassword);

        //DB에 User Role 저장
        List<String> roles = authorityUtils.createRoles(member.getUserEmail());
        member.setRoles(roles);

        member.setMemberStatus(Member.MemberStatus.MEMBER_ACTIVE);

        Member savedMember = memberRepository.save(member);

        publisher.publishEvent(new MemberRegistrationApplicationEvent(savedMember));
        return savedMember;
    }

    private void verifyExistUserEmail(String userEmail) {
        Optional<Member> member = memberRepository.findByUserEmail(userEmail);
        if(member.isPresent()) throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    public Member findMember(Long userId, String memberEmail) {
        return verifyExistUserId(userId);
    }

    public Member verifyExistUserId(Long userId) {
        Optional<Member> optionalMember = memberRepository.findById(userId);
        return optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    public void deleteMember(Long userId, String memberEmail) {

        Optional<Member> optionalMember = memberRepository.findByUserEmail(memberEmail);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        memberRepository.delete(findMember);
        findMember.setMemberStatus(Member.MemberStatus.MEMBER_QUIT);
    }

    public Member editMember(Long userId, Member member) {
        Member findMember = verifyExistUserId(userId);

        //수정 요청한 멤버와 로그인 중인 멤버가 일치하는지 확인
        if(findMember.getId() != getLoginMember().getId())
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED);

        //같으면 수정
        Optional.ofNullable(member.getUserName())
                .ifPresent(name -> findMember.setUserName(name));
        Optional.ofNullable(member.getUserPassword())
                .ifPresent(pw -> findMember.setUserPassword(pw));
        Optional.ofNullable(member.getUserImageUrl())
                .ifPresent(url -> findMember.setUserImageUrl(url));

        //Password 암호화
        String encryptedPassword = passwordEncoder.encode(member.getUserPassword());
        member.setUserPassword(encryptedPassword);

        return memberRepository.save(findMember);
    }

    //로그인 중인 멤버 찾기
    public Member getLoginMember() {
        //토큰이 있는지 확인
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication == null || authentication.getName() == null|| authentication.getName().equals("anonymousUser"))
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED);

        Optional<Member> optionalMember = memberRepository.findByUserEmail(authentication.getName());
        Member member = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        //로그인 상태인지 확인
        if(!member.getMemberStatus().equals(Member.MemberStatus.MEMBER_LOGIN))
            throw new BusinessLogicException(ExceptionCode.ANONYMOUS_USER);

        return member;
    }

    //로그아웃
    public void logoutMember(Long userId) {
        Member findMember = verifyExistUserId(userId);

        //로그아웃 요청한 멤버와 로그인 중인 멤버가 일치하는지 확인
        if(findMember.getId() != getLoginMember().getId())
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED);

        //같으면 로그아웃 상태로 변경
        findMember.setMemberStatus(Member.MemberStatus.MEMBER_LOGOUT);

        memberRepository.save(findMember);
    }
}
