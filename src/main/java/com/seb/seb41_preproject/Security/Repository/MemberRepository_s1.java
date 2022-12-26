package com.seb.seb41_preproject.Security.Repository;

import com.seb.seb41_preproject.Security.Member.Member_s1;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository_s1 extends JpaRepository<Member_s1, Long> {
    Optional<Member_s1> findByMemberId(String username);
}