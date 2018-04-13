package com.isa.project.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isa.project.bean.Notification;
import com.isa.project.bean.User;
import com.isa.project.repository.NotificationRepository;
import com.isa.project.service.NotificationService;

@Service
public class NotificationServiceImpl implements NotificationService {
	
	@Autowired
	private NotificationRepository notificationRepository;

	

	@Override
	public Boolean addNotification(String text, User u) {
		
		Notification n = new Notification(text,u);
		
		
		try {
			notificationRepository.saveAndFlush(n);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			System.out.println("Error occured while writing to database");
			return false;
			
		}
		
	}
	
}
