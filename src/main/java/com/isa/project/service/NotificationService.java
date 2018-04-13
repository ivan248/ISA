package com.isa.project.service;

import org.springframework.stereotype.Service;

import com.isa.project.bean.User;

@Service
public interface NotificationService {
	public Boolean addNotification(String text, User u);
	
}
