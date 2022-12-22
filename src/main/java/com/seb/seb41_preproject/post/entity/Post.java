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
    private String Tag;

    @ElementCollection
    @CollectionTable(name = "TAG", joinColumns = @JoinColumn(name = "POST_ID"))
    @Column(name = "TAG_LIST")
    private List<String> Tags;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column
    private int Views;

    @Column
    private int LikeCount;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @JsonManagedReference
    @OneToMany(mappedBy = "post")
    private List<Likes> likes = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "post")
    private List<Comment> comments = new ArrayList<>();

    public void setMember(Member member) {
        if (this.member != null) {
            this.member.getPosts().remove(this);
        }
        this.member = member;
        member.getPosts().add(this);
    }
}