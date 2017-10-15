package com.example.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {

	@RequestMapping(value="/hello")
	public String hello() {
		return "views/index";
	}
	
	@RequestMapping(value="/demo")
	public String demo() {
		System.out.println("dddd");
		return "views/demo";
	}
}
