package com.isa.project.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.isa.project.bean.User;


@Service
public interface UserService {

	Optional<User> getUserById(long id);

	public void createVerificationToken(final User user, final String token);
	Collection<User> getAllUsers();

	User findByConfirmationToken(String confirmationToken);
	

}
