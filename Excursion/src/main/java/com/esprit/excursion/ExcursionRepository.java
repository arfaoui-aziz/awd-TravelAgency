package com.esprit.excursion;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



public interface ExcursionRepository extends JpaRepository<Excursion, Integer> {

	@Query("select e from Excursion e where e.destination like :destination")
	public Page<Excursion> excursionByDestination(@Param("destination") String n, Pageable pageable);
}
