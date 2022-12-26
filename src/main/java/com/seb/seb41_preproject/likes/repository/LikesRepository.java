package com.seb.seb41_preproject.likes.repository;

import com.seb.seb41_preproject.likes.entity.Likes;
import lombok.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface LikesRepository extends JpaRepository<Likes, Long> {

    Optional<Likes> findById(Long id);

    @Query(value = "select l.LikeCheck from Likes l where l.post.id = :postId and l.member.id = :memberId")
    Optional<Integer> findLikeCheck(@Param(value = "postId") Long id,
                          @Param(value = "memberId") Long memberId);
    @Query(value = "select l from Likes l where l.post.id = :postId and l.member.id = :memberId")
    Optional<Likes> existsLikes(@Param(value = "postId") Long id,
                                @Param(value = "memberId") Long memberId);
    Optional<Likes> findByPostId(Long id);

    Optional<Likes> findByMemberId(Long id);

    Optional<Likes> findByCommentId(Long id);
}
