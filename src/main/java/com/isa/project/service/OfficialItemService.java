package com.isa.project.service;

import org.springframework.stereotype.Service;

import com.isa.project.bean.OfficialItem;
import com.isa.project.bean.User;


@Service
public interface OfficialItemService {
	
	Boolean editItem(OfficialItem item);
	Boolean reserve(int id);
	Boolean setSold(int id);
	Boolean reserve(int id, User u);
	
}
