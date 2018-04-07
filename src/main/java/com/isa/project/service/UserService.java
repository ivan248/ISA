package com.isa.project.service;


import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Friend;
import com.isa.project.bean.User;
import com.isa.project.web.dto.RegistrationUserDto;

@Service
public interface UserService {

	public boolean registerUser(RegistrationUserDto userDto, HttpServletRequest req);
	public boolean confirmAccountRegistrationToken(String token);
	public User editUser(RegistrationUserDto userDto, String username);
	public List<Friend> getFriends(String username);
	public List<Friend> removeFriend(int id, String usernameFromToken);
	public List<User> getAllUsers(String usernameFromToken);
	public boolean handleFriendRequest(String currentUser, String friendUsername);
	public List<Friend> getFriendRequests(String usernameFromToken);
	public List<Friend> acceptFriend(String usernameFromToken, int id);
	public List<Friend> declineFriend(String usernameFromToken, int id);
}
