package com.isa.project.web;

import java.util.HashSet;
import java.util.Set;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.isa.project.bean.Role;
import com.isa.project.bean.User;
import com.isa.project.web.dto.RegistrationUserDto;

public class Converter {
	
	public static User RegistrationDtoToUser(final RegistrationUserDto userDto) {
		
		User user = new User();
		Role r = new Role();
		
		if(!userDto.getPassword().equals(userDto.getPasswordRepeat()))
			return null;
		else
		{
			user.setPassword(new BCryptPasswordEncoder().encode(userDto.getPassword()));
		}
		
		
		r.setRole("REGISTERED_USER");
		Set<Role> s = new HashSet<Role>();
		s.add(r);

		
		user.setFirstName(userDto.getFirstName());
		user.setLastName(userDto.getLastName());
		user.setUsername(userDto.getEmail());
		user.setCity(userDto.getCity());
		user.setPhoneNumber(userDto.getPhoneNumber());
		user.setRoles(s);
		
		
		return user;
	}

}
