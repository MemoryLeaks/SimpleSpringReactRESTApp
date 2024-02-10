package com.restapi.experimental.entity;

import com.restapi.experimental.logic.Gender;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "web_user")
public class WebUser {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String name;
	private String surname;
	private Gender gender;
	
	@Column(name="birth_date")
	private String birthDate;
	
	@Column(name="work_address", nullable = true)
	private String workAddress;
	
	@Column(name="home_address", nullable = true)
	private String homeAddress;
	
	public WebUser() {
		// No arguments constructor
	}
	
	public WebUser(Integer id, String name, String surname, Gender gender, String birthDate, String workAddress, String homeAddress) {
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.gender = gender;
		this.birthDate = birthDate;
		this.workAddress = workAddress;
		this.homeAddress = homeAddress;
	}
	
	public WebUser clone() {
		WebUser newWebUser = null;
	    try {
	    	newWebUser = (WebUser) super.clone();
	    } catch (CloneNotSupportedException e) {
	    	newWebUser = new WebUser(
	          this.getId(), this.getName(), this.getSurname(), this.getGender(), this.getBirthDate(), this.getWorkAddress(), this.getHomeAddress());
	    }
		
	    return newWebUser;
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
