package com.isa.project.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.isa.project.bean.Notification;
import com.isa.project.bean.User;

@Repository
@Transactional 
public interface NotificationRepository extends JpaRepository<Notification,Integer>{
	List<Notification> findAllByUser(User user);
	Notification findOneByNotificationID(Integer notificationID);
	
	
	
	
} 
