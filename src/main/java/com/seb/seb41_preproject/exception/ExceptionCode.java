package com.seb.seb41_preproject.exception;

import lombok.Getter;
import org.springframework.web.client.HttpClientErrorException;

public enum ExceptionCode {

    POST_NOT_FOUND(404, "Post not found"),
    POST_EXISTS(409, "Post exists"),

    COMMENT_NOT_FOUND(404,"Comment not found"),

    MEMBER_EXISTS(409,"Member exists" ),
    MEMBER_NOT_FOUND(404,"Member not found"),

    LIKE_EXIST(409,"Like is already check"),

    UNAUTHORIZED(401, "Unauthorized");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}