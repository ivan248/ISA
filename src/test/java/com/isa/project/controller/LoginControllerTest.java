package com.isa.project.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.nio.charset.Charset;

import javax.annotation.PostConstruct;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.isa.project.web.dto.RegistrationUserDto;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LoginControllerTest {

	private static final String url = "/api/login/";
	
	private MediaType contentType = new MediaType(MediaType.APPLICATION_JSON.getType(),
			MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));
	
	private MockMvc mockMvc;
	
	@Autowired 
	private WebApplicationContext webApplicationContext;
	
	
	@PostConstruct
	public void setup() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
	}
	
//	@Test
//	public void testRegisterUser() throws Exception {
//		
//		RegistrationUserDto registrationUserDto = new RegistrationUserDto();
//		registrationUserDto.setCity("asd");
//		registrationUserDto.setEmail("email@gmail.com");
//		registrationUserDto.setFirstName("ivan");
//		registrationUserDto.setLastName("jancic");
//		registrationUserDto.setPassword("123");
//		registrationUserDto.setPasswordRepeat("123");
//		registrationUserDto.setPhoneNumber(064);
//		
//		
//		
//		mockMvc.perform(get(url+"/registrationMessage"))
//		.andExpect(status().isOk())
//		.andExpect(content().contentType(contentType));
//		//.andExpect(jsonPath("$.[*].endDate").exists())
//	}
}
