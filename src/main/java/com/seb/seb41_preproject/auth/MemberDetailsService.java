package com.seb.seb41_preproject.auth;

import com.seb.seb41_preproject.exception.BusinessLogicException;
import com.seb.seb41_preproject.exception.ExceptionCode;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.member.repository.MemberRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@Component
public class MemberDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;
    private final MemberAuthorityUtils authorityUtils;

    public MemberDetailsService(MemberRepository memberRepository, MemberAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.authorityUtils = authorityUtils;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<Member> optionalMember = memberRepository.findByUserEmail(username);
        Member member = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return new MemberDetails(member,memberRepository);
    }
    public final class MemberDetails extends Member implements UserDetails {

        private final Long id;
        private final MemberRepository memberRepository;
        private Member member;
        MemberDetails(Member findMember, MemberRepository memberRepository) {
            this.memberRepository = memberRepository;
            this.member = findMember;
            this.id = findMember.getId();
            setId(findMember.getId());
            setUserName(findMember.getUserName());
            setUserEmail(findMember.getUserEmail());
            setUserPassword(findMember.getUserPassword());
            setUserImageUrl(findMember.getUserImageUrl());
            setRoles(findMember.getRoles());
        }


        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }

        public Member getMember() {
            Optional<Member> byId = memberRepository.findById(id);
            this.member = byId.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
            return member;
        }
        @Override
        public String getPassword() {
            return getUserPassword();
        }

        @Override
        public String getUsername() {
            Optional<Member> byUserId = memberRepository.findById(id);
            Member member = byUserId.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
            return member.getUserEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
}
}