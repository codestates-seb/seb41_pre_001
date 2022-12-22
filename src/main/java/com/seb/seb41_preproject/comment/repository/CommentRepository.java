package com.seb.seb41_preproject.comment.repository;

import com.seb.seb41_preproject.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment,Long> {

    Optional<Comment> findById(Long id);

    Optional<List<Comment>> findAllByPostId(Long id);

}
