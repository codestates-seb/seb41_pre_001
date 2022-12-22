package com.seb.seb41_preproject.post.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.likes.entity.Likes;
import com.seb.seb41_preproject.member.entity.Member;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String Title;

    @Column(nullable = false)
    private String Content;

    @Column(nullable = false)
    private List<String> Tag;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private Long Views;

    @Column
    private int LikeCount;

    @OneToMany(mappedBy = "post")
    private List<PostTag> postTags = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @JsonManagedReference
    @OneToMany(mappedBy = "post")
    private List<Likes> likes = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "post")
    private List<Comment> comments = new ArrayList<>();

}