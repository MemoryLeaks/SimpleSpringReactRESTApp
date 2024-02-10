package com.restapi.experimental.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restapi.experimental.dto.WebUserDto;
import com.restapi.experimental.service.implementation.WebUserServiceCRUDImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/webuser")
public class WebUserController {
	private WebUserServiceCRUDImpl webUserServiceCRUDImpl;

	public WebUserController(WebUserServiceCRUDImpl webUserServiceCRUDImpl) {
		super();
		this.webUserServiceCRUDImpl = webUserServiceCRUDImpl;
	}
	
	
	/**
	 * POST method that creates a Web User given a DTO Object of a webUser that is being passed as Argument.
	 * If the JSON request parameter argument has the right form it will be deserialized only by
	 * using the RequestBody annotation.
	 * @param The webUserDto deserialized web user argument.
	 * @return The saved web user as a JSON response. 
	 */
	@PostMapping
	public ResponseEntity<WebUserDto> createWebUser(@RequestBody WebUserDto webUserDto) {
		WebUserDto savedWebUser = this.webUserServiceCRUDImpl.createWebUserDto(webUserDto);
		
		return new ResponseEntity<>(savedWebUser, HttpStatus.CREATED);
	}
	
	/**
	 * GET method that returns the Web User as JSON response. 
	 * @param id The id of the Web User.
	 * @return The found Web User entity as JSON. 
	 */
	@GetMapping("{id}")
	public ResponseEntity<WebUserDto> getWebUser(@PathVariable("id") Integer id) {
		WebUserDto webUserDto = this.webUserServiceCRUDImpl.getWebUser(id);
		
		return new ResponseEntity<>(webUserDto, HttpStatus.OK);
	}
	
	/**
	 * GET method that returns the saved Web Users.
	 * @return JSON response containing all the records of Users.
	 */
	@GetMapping
	public ResponseEntity<List<WebUserDto>> getAllWebUsers() {
		List<WebUserDto> webUsersDto = this.webUserServiceCRUDImpl.getAllWebUsers();
		return new ResponseEntity<>(webUsersDto, HttpStatus.OK);
	}
	
	/**
	 * PUT method that updates a Web User given its Id and the full JSON Body that carries all the new updated values passed from the
	 * front end.
	 * @param id The Web User's id.
	 * @param updatedWebUserDto The Request JSON body of the updated Web User.
	 * @return OK in success with the new updated Web User
	 */
	@PutMapping("{id}")
	public ResponseEntity<WebUserDto> updateWebUser(@PathVariable("id") int id,@RequestBody WebUserDto updatedWebUserDto) {
		WebUserDto savedWebUserDto = this.webUserServiceCRUDImpl.updateWebUser(id, updatedWebUserDto);
		
		return new ResponseEntity<>(savedWebUserDto, HttpStatus.OK);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<WebUserDto> deleteWebUser(@PathVariable("id") int id) {
		WebUserDto removedWebUser = this.webUserServiceCRUDImpl.deleteWebUser(id);
		
		return new ResponseEntity<>(removedWebUser, HttpStatus.OK);
	}

	
}
