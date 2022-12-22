package com.seb.seb41_preproject.member.mapper;

import com.seb.seb41_preproject.member.dto.MemberDto;
import com.seb.seb41_preproject.member.entity.Member;
import org.mapstruct.Mapper;

import static com.seb.seb41_preproject.member.dto.MemberDto.*;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member MemberPostDtoToMember(MemberPostDto postDto);

    Member MemberToMemberResponseDto(Member member);
}
