package com.isa.project.controller;

import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


import java.nio.charset.Charset;
import java.sql.Date;
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
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import com.isa.project.TestUtil;
import com.isa.project.bean.Item;
import com.isa.project.web.dto.BidDTO;



@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration
@WebAppConfiguration
@SpringBootTest
public class BidControllerTest {
	
private static final String url = "/bid";
	
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
	
	@WithMockUser(roles= {"SYSTEM_ADMIN"})
	@Test
	@Transactional
	@Rollback(true)
	public void testCheckAllBids() throws Exception {
		
		Item i = new Item();
		i.setName("Name");
		
		i.setApproved(false);
		i.setDescription("asfafsafafasfsafasfas"); 
		i.setSold(false);
		i.setSomeoneBid(false); 
		i.setImage("");
		java.util.Date date = new java.util.Date();
		Date sqlDateb = new java.sql.Date(date.getTime());
		i.setBeginDate(sqlDateb);
		
	    java.sql.Date sqlDate = java.sql.Date.valueOf("2019-12-12");
		i.setEndDate(sqlDate);
		
		
		String json = TestUtil.json(i);
		
		mockMvc.perform(post(url+"/checkallbids").contentType(contentType).content(json))
		.andExpect(status().isBadRequest());
		
	}
	
	
	@Test
	@Transactional
	@Rollback(true)
	public void testaddBid() throws Exception {
		
		BidDTO b = new BidDTO();
		b.setItem(new Item());
		b.setBid(944);
		
		String json = TestUtil.json(b);
		
		mockMvc.perform(post(url+"/add").contentType(contentType).content(json))
		.andExpect(status().isOk());
		
	}
	
	
	
	
	
	
}
