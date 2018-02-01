package com.isa.project.web.rest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/login")
public class LoginController {
	
	@RequestMapping(value = "")
	public String index(Model model) {
		
		
		return "login/login";
	}

}
