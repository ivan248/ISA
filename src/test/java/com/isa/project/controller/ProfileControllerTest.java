package com.isa.project.controller;

import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.nio.charset.Charset;

import javax.annotation.PostConstruct;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration
@WebAppConfiguration
@SpringBootTest
public class ProfileControllerTest {

	private static final String url = "/api/profile/";


	private MediaType contentType = new MediaType(MediaType.APPLICATION_JSON.getType(),
			MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));

	private MockMvc mockMvc;

	@Autowired
	private WebApplicationContext webApplicationContext;

	@Rule
	public ExpectedException thrown = ExpectedException.none();

	@PostConstruct
	public void setup() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).apply(springSecurity()).build();
	}
	
	@Test
	public void testGetFriends() throws Exception { 
		mockMvc.perform(get(url+"/getFriends").header("X-Auth-Token", "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJSRUdJU1RFUkVEX1VTRVIifV0sImFjdGl2aXR5IjozODYwLCJleHAiOjE1MjQ0NDA0ODYsInVzZXIiOiJpdmFuX2phbmNpY0B1bnMuYWMucnMifQ.u5uMcSNGvuovzigB4LT6LHaMzQWjT4e2eCtSFbDkdViMfBBrLppUBfVT1R5zlMaPQTQwTcr1mxc9WHqvPSExAQ")
				).andExpect(jsonPath("$.[*].friendUsername").exists());
	}
	
	@Test
	@Transactional
	@Rollback(true)
	public void testRemoveFriend() throws Exception {
		mockMvc.perform(get(url+"/removeFriend").param("friendId", "1")).andExpect(status().isBadRequest());
	}

}
