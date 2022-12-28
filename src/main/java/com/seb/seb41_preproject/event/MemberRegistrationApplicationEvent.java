package com.seb.seb41_preproject.event;

import com.seb.seb41_preproject.member.entity.Member;
import lombok.Getter;

@Getter
public class MemberRegistrationApplicationEvent {
    private Member member;
    public MemberRegistrationApplicationEvent(Member member) {
        this.member = member;
    }
}