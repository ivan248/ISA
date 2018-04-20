package com.isa.project.controller;

import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.nio.charset.Charset;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

import javax.annotation.PostConstruct;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.isa.project.TestUtil;
import com.isa.project.bean.Item;
import com.isa.project.web.dto.AddNewItemDto;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration
@WebAppConfiguration
@SpringBootTest

public class FanzoneControllerTest {
	private static final String url = "/fanzone";
	
	private MediaType contentType = new MediaType(MediaType.APPLICATION_JSON.getType(),
			MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));
	
	private MockMvc mockMvc;
	
	@Autowired 
	private WebApplicationContext webApplicationContext;
	
	@Rule public ExpectedException thrown= ExpectedException.none();
	
	
	@PostConstruct
	public void setup() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).apply(springSecurity()).build();
	}
	
	@Test
	public void testGetAllItems() throws Exception {
		mockMvc.perform(get(url+"/")).andExpect(status().isOk())
		.andExpect(content().contentType(contentType));
		//.andExpect(jsonPath("$.[*].endDate").exists())
	}
	
	@Test
	public void testGetAllOfficialItems() {
		try {
			mockMvc.perform(get(url+"/new")).andExpect(status().isOk())
			.andExpect(jsonPath("$.[*].reserved").exists());
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
	}
	
	@WithMockUser(roles= {"SYSTEM_ADMIN"})
	@Test //Da li svaki polovni item ima postavljen istek ponude
	public void testGetAllUnApprovedItems() {
		try {
			 mockMvc.perform(get(url+"/unapproved")).andExpect(status().isOk())
			.andExpect(content().contentType(contentType)).andExpect(jsonPath("$.[*].endDate").exists());
			
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	@Test
	public void testGetItem()  {
		
		try {
			mockMvc.perform(get(url+"/getitem").header("X-Auth-Token", "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJSRUdJU1RFUkVEX1VTRVIifV0sImFjdGl2aXR5IjozODYwLCJleHAiOjE1MjQ0NDA0ODYsInVzZXIiOiJpdmFuX2phbmNpY0B1bnMuYWMucnMifQ.u5uMcSNGvuovzigB4LT6LHaMzQWjT4e2eCtSFbDkdViMfBBrLppUBfVT1R5zlMaPQTQwTcr1mxc9WHqvPSExAQ")
					.param("id", "1"))
					.andExpect(status().isOk());
		} catch (Exception e) {
			//ignore
		}
	}
	
	
	
	 
	
	
	
	
	
	
}
