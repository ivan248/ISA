package com.isa.project.controllers;

import java.util.ArrayList;



import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@RequestMapping(value = "/cheese")
public class FanZonaController {
	
	static ArrayList<String> cheeses = new ArrayList<String>();
	
	@RequestMapping(value = "")
	public String index(Model model) {
		
		model.addAttribute("cheeses",cheeses); //model je ono sto mozes da koristis od podataka u html-u
		model.addAttribute("title","Fan zona");
		return "cheese/index";
	}
	
	@RequestMapping(value = "/add", method = RequestMethod.GET)
	public String dsplayAddCheeseForm(Model model){
		model.addAttribute("title","Add cheese");
		return "cheese/add";
	}
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public String processAddCheeseForm(@RequestParam String cheeseName){ //ovo radi tako sto ako u html-u madje cheeseName, njegovu vrednost stavlja u pram funkcije
		//String cheeseName = request.getParameter("cheeseName"); //cheeseName mora da bude isti kao Name input taga html forme LOS NACIN
		cheeses.add(cheeseName);
		//redirect to /chese
		return "redirect:"; // kad se ovako napise, URL ce biti localhost:8080/cheese jer je requestmapping ove cele klase /cheese
	}
}
