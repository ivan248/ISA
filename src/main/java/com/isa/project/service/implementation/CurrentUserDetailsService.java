package com.isa.project.service.implementation;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.isa.project.bean.CurrentUser;
import com.isa.project.bean.User;
import com.isa.project.repository.UserRepository;

@Service
public class CurrentUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<User> optionalUser = userRepository.findByEmail(email);
		
		optionalUser.orElseThrow(() -> new UsernameNotFoundException("User with given email not found"));
		CurrentUser currentUser = optionalUser
			.map(user ->{ return new CurrentUser(user); }).get(); // if value is present map will be called and it will return it
		
		
		return currentUser;
	}

}
