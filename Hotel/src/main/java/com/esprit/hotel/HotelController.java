package com.esprit.hotel;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HotelController {

	private String title="Hello, I'm Hotel";
	
	@RequestMapping("/hello")
	public String sayHello() {
		System.out.println(title);
		return title;
	}
}
