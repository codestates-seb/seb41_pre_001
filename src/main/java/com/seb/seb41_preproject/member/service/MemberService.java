package com.seb.seb41_preproject.member.service;

import com.seb.seb41_preproject.exception.BusinessLogicException;
import com.seb.seb41_preproject.exception.ExceptionCode;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member createMember(Member member) {
        verifyExistUserEmail(member.getUserEmail());

        Member savedMember = memberRepository.save(member);
        return savedMember;
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
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    public void deleteMember(Long userId) {

        Optional<Member> optionalMember = memberRepository.findById(userId);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        memberRepository.delete(findMember);
    }
}
