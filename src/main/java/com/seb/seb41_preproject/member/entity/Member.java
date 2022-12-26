package com.seb.seb41_preproject.member.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.likes.entity.Likes;
import com.seb.seb41_preproject.post.entity.Post;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.ArrayList;
import java.util.List;


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
    private List<String> roles = new ArrayList<>();


}
