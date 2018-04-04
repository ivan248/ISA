package com.isa.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isa.project.bean.User;

public interface UserRepository extends JpaRepository<User, Long> {
	 Optional<User> findByUsername(String username);
	 User findByConfirmationToken(String token);
}
