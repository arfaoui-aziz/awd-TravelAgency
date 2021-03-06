package com.esprit.hotel;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface HotelRepository extends JpaRepository<Hotel, Integer> {

	@Query("select h from Hotel h where h.name like :name")
	public Page<Hotel> hotelByName(@Param("name") String n, Pageable pageable);
	
	@Query("select h from Hotel h where h.id like :id")
	public Page<Hotel> hotelById(@Param("id") int n, Pageable pageable);
	
}
