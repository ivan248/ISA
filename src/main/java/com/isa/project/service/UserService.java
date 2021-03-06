package com.isa.project.service;


import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.isa.project.bean.Friend;
import com.isa.project.bean.ProjectionSeats;
import com.isa.project.bean.ProjectionUserTicketId;
import com.isa.project.bean.User;
import com.isa.project.web.dto.RegistrationUserDto;
import com.isa.project.web.dto.ReservationDTO;

@Service
public interface UserService {

	public boolean registerUser(RegistrationUserDto userDto, HttpServletRequest req);
	public boolean confirmAccountRegistrationToken(String token);
	public User editUser(RegistrationUserDto userDto, String username);
	public List<Friend> getFriends(String username);
	public List<Friend> removeFriend(int id, String usernameFromToken);
	public List<User> getAllUsers(String usernameFromToken);
	public List<User> handleFriendRequest(String currentUser, String friendUsername);
	public List<Friend> getFriendRequests(String usernameFromToken);
	public List<Friend> acceptFriend(String usernameFromToken, int id);
	public List<Friend> declineFriend(String usernameFromToken, int id);
	public boolean changePassword(String usernameFromToken, String password);

	public void addActivityPoints(Long points,String username);

	public List<User> searchUsers(String usernameFromToken, String searchName, String searchLastName);
	public List<ReservationDTO> getReservations(String usernameFromToken);
	public boolean acceptORdeclineInvitation(ProjectionUserTicketId projectionUserTicketId, String accept);

	public boolean checkIfUserHasRole(User u, String role);

	public boolean cancelProjectionReservation(String usernameFromToken, int parseInt, int parseInt2);
	public boolean makeReservation(ProjectionSeats projectionSeat);
	
	public List<User> getAllUsersForAllUsers(User u);


}
