package com.isa.project.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.nio.charset.Charset;
import java.sql.Date;

import javax.annotation.PostConstruct;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.isa.project.bean.Item;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FanzoneControllerTest {
	private static final String url = "/fanzone";
	
	private MediaType contentType = new MediaType(MediaType.APPLICATION_JSON.getType(),
			MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));
	
	private MockMvc mockMvc;
	
	@Autowired 
	private WebApplicationContext webApplicationContext;
	
	
	@PostConstruct
	public void setup() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
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
			mockMvc.perform(get(url+"/new")).andExpect(status().isOk());
//			.andExpect(jsonPath("$.[*].reserved").exists());
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
	}
	
	/*	@Test
	public void testGetAllUnApprovedItems() {
		try {
			mockMvc.perform(get(url+"/unapproved")).andExpect(status().isOk())
			.andExpect(content().contentType(contentType));
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		//.andExpect(jsonPath("$.[*].endDate").exists())
	}
	
	
	@Test
	public void testAddItem() throws Exception {
		Item i = new Item();
		i.setName("Name Test");
		i.setDescription("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
		i.setImage("");
		java.util.Date date = new java.util.Date();
		Date sqlDate = new java.sql.Date(date.getTime());
		i.setEndDate(sqlDate);
		
		SecurityContext ctx = SecurityContextHolder.createEmptyContext();
	    SecurityContextHolder.setContext(ctx);
	    ctx.setAuthentication(SecurityContextHolder.getContext().getAuthentication());
		
		String json = TestUtil.json(i);
		this.mockMvc.perform(post(url+"/additem").contentType(contentType).content(json)).andExpect(status().isCreated());
	}*/
	
	 
	
	
	
	
	
	
}
