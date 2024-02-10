package com.restapi.experimental.mapper;

import com.restapi.experimental.dto.WebUserDto;
import com.restapi.experimental.entity.WebUser;

public class WebUserMapper {
	
	public static WebUserDto mapToWebUserDto(WebUser webUser) {
		WebUserDto webUserDto = new WebUserDto(
				webUser.getId(),
				webUser.getName(),
				webUser.getSurname(),
				webUser.getGender(),
				webUser.getBirthDate(),
				webUser.getWorkAddress(),
				webUser.getHomeAddress()
		);
		
		return webUserDto;
	}
	
	public static WebUser mapToWebUser(WebUserDto webUserDto) {
		WebUser webUser = new WebUser(
				webUserDto.getId(),
				webUserDto.getName(),
				webUserDto.getSurname(),
				webUserDto.getGender(),
				webUserDto.getBirthDate(),
				webUserDto.getWorkAddress(),
				webUserDto.getHomeAddress()
		);
		
		return webUser;
	}

}
