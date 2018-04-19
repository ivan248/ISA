package com.isa.project.web;

import java.sql.Date;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.isa.project.bean.Cinema;
import com.isa.project.bean.Item;
import com.isa.project.bean.OfficialItem;
import com.isa.project.bean.Projection;
import com.isa.project.bean.Role;
import com.isa.project.bean.Theatre;
import com.isa.project.bean.User;
import com.isa.project.web.dto.AddNewItemDto;
import com.isa.project.web.dto.CinemaDTO;
import com.isa.project.web.dto.OfficialItemDTO;
import com.isa.project.web.dto.RegistrationUserDto;
import com.isa.project.web.dto.TheatreDTO;

public class Converter {
	
	
	
	public static User RegistrationDtoToUser(final RegistrationUserDto userDto) {
		
		User user = new User();
		Role r = new Role();
		
		if(!userDto.getPassword().equals(userDto.getPasswordRepeat()))
			return null;
		else
		{
			user.setPassword(new BCryptPasswordEncoder().encode(userDto.getPassword()));
		}
		
		
		r.setRole("ANONYMOUS");
		Set<Role> s = new HashSet<Role>();
		s.add(r);

		
		user.setFirstName(userDto.getFirstName());
		user.setLastName(userDto.getLastName());
		user.setUsername(userDto.getEmail());
		user.setCity(userDto.getCity());
		user.setPhoneNumber(userDto.getPhoneNumber());
		user.setRoles(s);
		user.setFirstTimeLogged(false);
		
		
		return user;
	}
	
	public static Item convertAddNewItemToItem(AddNewItemDto newItemDTO) {
		Item newItem = new Item(newItemDTO.getName(), newItemDTO.getDescription(),newItemDTO.getEndDate(),newItemDTO.getImage());
		return newItem;
	}
	
	public static OfficialItem convertOfficialItemDTO(OfficialItemDTO i) {
		OfficialItem item = new OfficialItem();
		item.setName(i.getName());
		
		item.setDescription(i.getDescription());
		java.util.Date date = new java.util.Date();
		Date sqlDate = new java.sql.Date(date.getTime());
		item.setBeginDate(sqlDate);
		item.setPrice(i.getPrice());
		item.setImage(i.getImage());
		item.setReserved(false);
		item.setBuyer(null);
		
		
		item.setSold(false);
		
		return item;
	}
	
	public static Theatre convertTheatreDTO(TheatreDTO t) {
		
		Theatre theatre = new Theatre();
		theatre.setName(t.getName());
		theatre.setDescription(t.getDescription());
		theatre.setAddress(t.getAddress());
		theatre.setSum(0);
		theatre.setNumberOfGrades(0); 
		theatre.setRating(0);
		
		return theatre;
	}
	
	public static Cinema convertCinemaDTO(CinemaDTO c) {
		Cinema cinema = new Cinema();
		cinema.setName(c.getName());
		cinema.setDescription(c.getDescription());
		cinema.setAddress(c.getAddress());
		cinema.setRating(0);
		ArrayList<Projection> p = new ArrayList<Projection>();
		
		cinema.setProjekcije(p);
		return cinema;
	}
	
	
	
	


}
