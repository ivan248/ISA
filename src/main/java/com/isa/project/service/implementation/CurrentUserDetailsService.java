package com.isa.project.service.implementation;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
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

		return optionalUser.map(
				user -> createSpringSecurityUser(user)).orElseThrow(() ->
				new UsernameNotFoundException("User with given email was not found."));
		 // if value is present map will be called and it will return
					// it

	}
	
	private org.springframework.security.core.userdetails.User createSpringSecurityUser(User user) {
		
		if (!user.isEnabled()) {
			System.out.println("Usao u CurrentUserDetailsService, u if-u za proveru enableda.");

			throw new UsernameNotFoundException("User with given email was not activated.");
			
		}
		
		
		List<GrantedAuthority> grantedAuthorities = user.getRoles().stream().
				map(role -> new SimpleGrantedAuthority("ROLE_" + role.getRole()))
				.collect(Collectors.toList());
		
		return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPasswordHash(),grantedAuthorities);
	}

}
