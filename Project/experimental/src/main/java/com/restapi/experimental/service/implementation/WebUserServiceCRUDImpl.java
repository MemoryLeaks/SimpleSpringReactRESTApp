package com.restapi.experimental.service.implementation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.restapi.experimental.dto.WebUserDto;
import com.restapi.experimental.entity.WebUser;
import com.restapi.experimental.exception.WebUserNotFoundException;
import com.restapi.experimental.mapper.WebUserMapper;
import com.restapi.experimental.repository.WebUserRepository;
import com.restapi.experimental.service.WebUserService;

@Service
public class WebUserServiceCRUDImpl implements WebUserService {
	
	private WebUserRepository webUserRepository;

	public WebUserServiceCRUDImpl(WebUserRepository webUserRepository) {
		super();
		this.webUserRepository = webUserRepository;
	}

	@Override
	public WebUserDto createWebUserDto(WebUserDto webUserDto) {
		WebUser webUser = WebUserMapper.mapToWebUser(webUserDto);
		WebUser savedWebUser = webUserRepository.save(webUser);
		return WebUserMapper.mapToWebUserDto(savedWebUser);
	}

	@Override
	public WebUserDto getWebUser(Integer id) {
		
		WebUser webUser = this.webUserRepository.findById(id).orElseThrow(() -> {
			throw new WebUserNotFoundException("User with given id: [" + id + "] not found.");
		});
		
		WebUserDto webUserDto = WebUserMapper.mapToWebUserDto(webUser);
		
		return webUserDto;
	}

	@Override
	public List<WebUserDto> getAllWebUsers() {
		List<WebUser> webUsersList = this.webUserRepository.findAll();
		List<WebUserDto> webUsersDtoList = new ArrayList<>();
		for (WebUser w : webUsersList) {
			webUsersDtoList.add(WebUserMapper.mapToWebUserDto(w));
		}
		
		return webUsersDtoList;
	}

	@Override
	public WebUserDto updateWebUser(Integer id, WebUserDto webUserDto) {
		WebUser webUser = this.webUserRepository.findById(id).orElseThrow(() -> {
			throw new WebUserNotFoundException("User with given id: [" + id + "] not found.");
		});
		
		WebUser updatedWebUser = WebUserMapper.mapToWebUser(webUserDto);
		webUser.setName(updatedWebUser.getName());
		webUser.setSurname(updatedWebUser.getSurname());
		webUser.setBirthDate(updatedWebUser.getBirthDate());
		webUser.setGender(updatedWebUser.getGender());
		webUser.setWorkAddress(updatedWebUser.getWorkAddress());
		webUser.setHomeAddress(updatedWebUser.getHomeAddress());
		
		WebUser savedWebUser = webUserRepository.save(webUser);
		return WebUserMapper.mapToWebUserDto(savedWebUser);
	}

	@Override
	public WebUserDto deleteWebUser(Integer id) {
		WebUser webUser = this.webUserRepository.findById(id).orElseThrow(() -> {
			throw new WebUserNotFoundException("User with given id: [" + id + "] not found.");
		});
		
		WebUser removedWebUser = webUser.clone();
		
		this.webUserRepository.delete(webUser);
		return WebUserMapper.mapToWebUserDto(removedWebUser);
	}
	
	
	
}
