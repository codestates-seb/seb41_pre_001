package com.seb.seb41_preproject.likes.repository;

import com.seb.seb41_preproject.likes.entity.Likes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LikesRepository extends JpaRepository<Likes, Long> {

    Optional<Likes> findById(Long id);

    Optional<Likes> findByPostId(Long id);

    Optional<Likes> findByMemberId(Long id);

    Optional<Likes> findByCommentId(Long id);
}
