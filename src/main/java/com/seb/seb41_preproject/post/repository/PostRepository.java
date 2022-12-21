package com.seb.seb41_preproject.post.repository;

import com.seb.seb41_preproject.post.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {

    //postId를 기준으로 내림차순으로(최신순) 모든 정보를 가져오기
    Page<Post> findAllByOrderByIdDesc(Pageable pageable);
}
