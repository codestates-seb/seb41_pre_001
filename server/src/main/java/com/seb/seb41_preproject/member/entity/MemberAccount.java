package com.seb.seb41_preproject.member.entity;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class MemberAccount extends User {
    private Member member;

    public MemberAccount(Member member) {
        super(member.getUserEmail(), member.getUserPassword(), createAuthorities(member.getRoles()));
        this.member = member;
    }
    private static List<GrantedAuthority> createAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + roles))
                .collect(Collectors.toList());
        return authorities;
    }

    public Member getMember() {
        return member;
    }
}
