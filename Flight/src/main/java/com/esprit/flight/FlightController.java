package com.esprit.flight;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="/api/flights")
public class FlightController {


	@Autowired
	private FlightService flightService; 
	@Autowired
	private FlightRepository flightRepository; 
	
	
	@GetMapping
	public List<Flight> getFlights(){
		return this.flightRepository.findAll();
	}
	
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Flight> createFlight(@RequestBody Flight flight){
		return new ResponseEntity<>(flightService.addFlight(flight),HttpStatus.OK);
	}
	
	@DeleteMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<String> deleteFlight(@PathVariable(value="id") int id){
		return new ResponseEntity<>(flightService.deleteFlight(id),HttpStatus.OK);
	}
}
