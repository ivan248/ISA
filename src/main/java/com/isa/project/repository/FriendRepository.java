package com.isa.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.isa.project.bean.Friend;

public interface FriendRepository extends JpaRepository<Friend, Integer> {
	
	Friend findByFriendId(Integer id);
}
