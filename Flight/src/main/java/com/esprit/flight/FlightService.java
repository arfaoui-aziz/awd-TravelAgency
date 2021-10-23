package com.esprit.flight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class FlightService {

	@Autowired
	private FlightRepository  flightRepository; 
	
	public Flight addFlight(Flight flight) {
		return flightRepository.save(flight);
	}
	
	
	public String deleteFlight(int id) {
		if(flightRepository.findById(id).isPresent()) {
			flightRepository.deleteById(id);
			return "flight supprimé";
		}else {
			return "Error Flight non Supprimé";
		}
	}
	
}
