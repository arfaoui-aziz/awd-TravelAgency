package com.esprit.hotel;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@SpringBootApplication
@EnableEurekaClient
public class HotelApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelApplication.class, args);
	}
	
	/*
	@Autowired
	private HotelRepository repository;
	
	@Bean
	ApplicationRunner init() {
		return (args) -> {
			// save
			repository.save(new Hotel("hAziz", "haz@esprit.tn","tunisie","tunis","http://imgUrl",4,2034,6486,15,9000));
			// fetch
			repository.findAll().forEach(System.out::println);
		};
	}
*/
}
