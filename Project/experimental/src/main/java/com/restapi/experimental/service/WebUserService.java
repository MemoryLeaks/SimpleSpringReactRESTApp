package com.restapi.experimental.service;
import java.util.List;

import com.restapi.experimental.dto.WebUserDto;

public interface WebUserService {
	WebUserDto createWebUserDto(WebUserDto webUserDto);
	WebUserDto getWebUser(Integer id);
	List<WebUserDto> getAllWebUsers();
	WebUserDto updateWebUser(Integer id, WebUserDto webUserDto);
	WebUserDto deleteWebUser(Integer id);
}
