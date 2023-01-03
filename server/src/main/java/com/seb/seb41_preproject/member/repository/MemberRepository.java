package com.seb.seb41_preproject.member.repository;

import com.seb.seb41_preproject.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByUserEmail(String userEmail);

    Optional<Member> findById(Long userId);
}
