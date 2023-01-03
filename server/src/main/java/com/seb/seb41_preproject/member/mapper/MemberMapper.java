package com.seb.seb41_preproject.member.mapper;

import com.seb.seb41_preproject.member.dto.MemberDto;
import com.seb.seb41_preproject.member.entity.Member;
import org.mapstruct.Mapper;

import static com.seb.seb41_preproject.member.dto.MemberDto.*;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member MemberPostDtoToMember(MemberPostDto postDto);

    Member MemberPatchDtoToMember(MemberPatchDto patchDto);

    MemberGetDto MemberToMemberGetResponseDto(Member member);

    Member MemberGetDtoResponse(MemberGetDto memberGetDto);

    Member MemberToMemberResponseDto(Member member);

    MemberPostResponseDto MemberToMemberPostResponseDto(Member member);

    Member MemberPostResponseDtoToMember(MemberPostResponseDto MemberPostResponseDto);
}
