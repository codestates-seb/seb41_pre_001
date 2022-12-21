package com.seb.seb41_preproject.post.dto;

import com.seb.seb41_preproject.post.page.PageInfo;
import lombok.Getter;

//전체 포스트와 page정보를 함께 반환하는 Dto 클래스
@Getter
public class PostAllDto<T> {
    private T data;
    private PageInfo pageInfo;

    public PostAllDto(T data, PageInfo pageInfo) {
        this.data = data;
        this.pageInfo = pageInfo;
    }
}

