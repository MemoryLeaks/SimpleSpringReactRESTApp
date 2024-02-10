package com.restapi.experimental.logic;

public enum Gender {
	M("Male"),
	F("Female");

	public final String genderLabel;
	
	Gender(String genderLabel) {
		this.genderLabel = genderLabel;
	}
	

}
