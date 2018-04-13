package com.isa.project.service.implementation;

import static java.util.Collections.emptyList;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.isa.project.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		com.isa.project.bean.User user = userRepository.findByUsername(username).get();
		if(user == null) {
			throw new UsernameNotFoundException(username); 
		}
		
		List<GrantedAuthority> grantedAuthorities = user.getRoles().stream()
				.map(authority -> new SimpleGrantedAuthority(authority.getRole()))
						.collect(Collectors.toList());
		// ovde dodajem role koje ima i da li je enablovan
		
		if(!user.isEnabled())	
			return null;
		
		
		return new User(user.getUsername(), user.getPassword(), grantedAuthorities);
	}
	
	private org.springframework.security.core.userdetails.User createSpringSecUser(com.isa.project.bean.User user) {
		//provera da li je aktiviran
		
		// dodela uloga
		
		List<GrantedAuthority> grantedAuthorities = user.getRoles().stream()
				.map(authority -> new SimpleGrantedAuthority(authority.getRole()))
						.collect(Collectors.toList());
		
		return new User(user.getUsername(), user.getPassword(), grantedAuthorities); 
	}

}
