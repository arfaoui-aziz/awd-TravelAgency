package com.esprit.flight;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;





public interface FlightRepository  extends JpaRepository<Flight, Integer>{

	@Query("select f from Flight f where f.flightNumber like :flightNumber")
	public Page<Flight> flightByFlightNumber(@Param("flightNumber") String n, Pageable pageable);
	
	@Query("select f from Flight f where f.id like :id")
	public Page<Flight> flightById(@Param("id") int n, Pageable pageable);
}
