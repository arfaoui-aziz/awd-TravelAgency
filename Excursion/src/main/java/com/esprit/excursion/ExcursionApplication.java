package com.esprit.excursion;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ExcursionApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExcursionApplication.class, args);
	}

}
