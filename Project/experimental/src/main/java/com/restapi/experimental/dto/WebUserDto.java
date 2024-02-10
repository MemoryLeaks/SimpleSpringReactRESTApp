package com.restapi.experimental.dto;

import com.restapi.experimental.logic.Gender;

public class WebUserDto {

	private Integer id;
	private String name;
	private String surname;
	private Gender gender;
	private String birthDate;
	private String workAddress;
	private String homeAddress;
	
	public WebUserDto() {
		// No arguments constructor
	}
	
	public WebUserDto(Integer id, String name, String surname, Gender gender, String birthDate, String workAddress, String homeAddress) {
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.gender = gender;
		this.birthDate = birthDate;
		this.workAddress = workAddress;
		this.homeAddress = homeAddress;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public String getWorkAddress() {
		return workAddress;
	}

	public void setWorkAddress(String workAddress) {
		this.workAddress = workAddress;
	}

	public String getHomeAddress() {
		return homeAddress;
	}

	public void setHomeAddress(String homeAddress) {
		this.homeAddress = homeAddress;
	}
}
