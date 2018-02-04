package com.isa.project.service;

import java.util.Collection;
import java.util.Optional;

import com.isa.project.bean.User;



public interface UserService {

	Optional<User> getUserById(long id);


	Collection<User> getAllUsers();

}
