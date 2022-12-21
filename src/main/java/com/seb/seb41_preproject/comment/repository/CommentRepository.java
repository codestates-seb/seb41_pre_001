package com.seb.seb41_preproject.comment.repository;

import com.seb.seb41_preproject.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment,Long> {

    Optional<Comment> findById(Long id);

}
