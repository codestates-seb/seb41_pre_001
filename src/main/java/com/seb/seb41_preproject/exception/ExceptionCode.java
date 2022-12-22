package com.seb.seb41_preproject.exception;

import lombok.Getter;

public enum ExceptionCode {
    COMMENT_NOT_FOUND(404,"Comment not found"),
    POST_NOT_FOUND(404, "Post not found"),
    POST_EXISTS(409, "Post exists"),
    NOT_IMPLEMENTATION(501, "Not Implementation"),
    INVALID_MEMBER_STATUS(400, "Invalid member status");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}