package com.seb.seb41_preproject.likes.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.seb.seb41_preproject.comment.entity.Comment;
import com.seb.seb41_preproject.member.entity.Member;
import com.seb.seb41_preproject.post.entity.Post;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Likes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private int LikeCheck;

    @Column
    private int Count;
    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "POST_ID")
    private Post post;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "COMMENT_ID")
    private Comment comment;

    public void  updateLikesCount(int count) {
        Count = count;
    }

    public void setPost(Post post) {
        if (this.post != null) {
            this.post.getLikes().remove(this);
        }
        this.post = post;
        post.getLikes().add(this);
    }

    public void setMember(Member member) {
        if (this.member != null) {
            this.member.getLikes().remove(this);
        }
        this.member = member;
        member.getLikes().add(this);
    }
    public void setComment(Comment comment) {
        if (this.comment != null) {
            this.comment.getLikes().remove(this);
        }
        this.comment = comment;
        comment.getLikes().add(this);
    }

}
