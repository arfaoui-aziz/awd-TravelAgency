package com.esprit.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
@EnableEurekaClient
public class HotelApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelApplication.class, args);
	}
	
	
	

	@Autowired
	private HotelRepository repository;
	
	@Bean
	ApplicationRunner init() {
		return (args) -> {
			// save
			repository.save(new Hotel("La Cigale", "lacigale@esprit.tn","Zone Touristique El Morgene","Tabarka","https://cf.bstatic.com/xdata/images/hotel/max1280x900/80457331.jpg?k=b19f0b4dac160f9a2f912ab37672de51e7b6b92b389d11dfe565b2c25114c678&o=&hp=1",5,8081,9886,15,1860));
			repository.save(new Hotel("Marina Prestige", "marina@gmail.com","Avenue 14 janvier 2011 TABARKA","Tabarka","https://cf.bstatic.com/xdata/images/hotel/max1280x900/290529834.jpg?k=fc13484f11aa39e45c8c737c47f4fbf9f319f9e2a33e8dc563c3fc10690be1c7&o=&hp=1",4,8081,2286,30,400));
			repository.save(new Hotel("La Badira", "labadira@esprit.tn","Hammamet, Tunisie","Hammamet","https://cf.bstatic.com/xdata/images/hotel/max1280x900/75881056.jpg?k=5ae83fc38270b09384307c99fd41d7e497b79c73e54d7c2538f011d18c011d3d&o=&hp=1",5,8050,9886,5,1660));
			// fetch
			repository.findAll().forEach(System.out::println);
		};
	}

	
}
