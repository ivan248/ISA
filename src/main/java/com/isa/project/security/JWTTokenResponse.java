package com.isa.project.security;

import com.fasterxml.jackson.annotation.JsonProperty;

public class JWTTokenResponse {

	private String token;

	public JWTTokenResponse(String token) {
		this.token = token;
	}

	@JsonProperty("token")
	String getIdToken() {
		return token;
	}

	void setIdToken(String token) {
		this.token = token;
	}
}
