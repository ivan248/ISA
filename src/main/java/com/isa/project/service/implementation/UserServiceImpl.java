package com.isa.project.service.implementation;

import java.util.Collection;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.isa.project.bean.User;
import com.isa.project.bean.VerificationToken;
import com.isa.project.repository.TokenRepository;
import com.isa.project.repository.UserRepository;
import com.isa.project.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TokenRepository tokenRepository;

	@Override
	public Optional<User> getUserById(long id) {
		LOGGER.debug("Getting user={}", id);
		return Optional.ofNullable(userRepository.findOne(id));
	}

	@Override
	public Collection<User> getAllUsers() {
		LOGGER.debug("Getting all users");
		return userRepository.findAll(new Sort("email"));
	}

	@Override
	public void createVerificationToken(User user, String token) {

		final VerificationToken myToken = new VerificationToken(token, user);
		tokenRepository.save(myToken);

	}
	
	@Override
	public User findByConfirmationToken(String confirmationToken) {
		return userRepository.findByConfirmationToken(confirmationToken);
	}
	
	public void saveUser(User user) {
		userRepository.save(user);
	}

}
