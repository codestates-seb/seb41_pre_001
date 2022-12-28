package com.seb.seb41_preproject.member.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.likes.entity.Likes;
import com.seb.seb41_preproject.post.entity.Post;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String userName;

    @Column
    private String userEmail;

    @Column
    private String userPassword;

    @Column
    private String userImageUrl;

    @JsonManagedReference(value ="member")
    @Enumerated(value = EnumType.STRING)
    @Column
    private MemberStatus memberStatus;

    @JsonManagedReference(value ="post")
    @OneToMany(mappedBy = "member")
    private List<Post> posts = new ArrayList<>();

    @JsonManagedReference(value ="member")
    @OneToMany(mappedBy = "member")
    private List<Comment> comments = new ArrayList<>();

    @JsonManagedReference(value ="likes")
    @OneToMany(mappedBy = "member")
    private List<Likes> likes = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "ROLE", joinColumns = @JoinColumn(name = "MEMBER_ID"))
    @Column(name = "ROLES")
    private List<String> roles = new ArrayList<>();

    public enum MemberStatus {
        MEMBER_ACTIVE("가입 상태"),
        MEMBER_QUIT("탈퇴 상태"),
        MEMBER_LOGIN("로그인 상태"),
        MEMBER_LOGOUT("로그아웃 상태");


        @Getter
        private String status;

        MemberStatus(String status) {
            this.status = status;
        }
    }

}