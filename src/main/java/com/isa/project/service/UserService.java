package com.isa.project.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.isa.project.bean.User;
import com.isa.project.web.dto.RegistrationUserDto;

@Service
public interface UserService {

	public boolean registerUser(RegistrationUserDto userDto, HttpServletRequest req);
	public boolean confirmAccountRegistrationToken(String token);
	public User editUser(RegistrationUserDto userDto, String username);
}
