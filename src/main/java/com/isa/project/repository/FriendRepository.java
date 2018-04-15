package com.isa.project.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.isa.project.bean.Friend;

@Repository
public interface FriendRepository extends JpaRepository<Friend, Integer> {
	
	Friend findByFriendId(Integer id);

}
