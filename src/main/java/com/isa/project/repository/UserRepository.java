package com.isa.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isa.project.bean.User;

public interface UserRepository extends JpaRepository<User, Long> {
	 User findByUsername(String username);
}
