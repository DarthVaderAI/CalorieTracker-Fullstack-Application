package com.group15.springboot.login.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.group15.springboot.login.models.measurements;


@Repository
public interface measurementRepository extends JpaRepository<measurements, String>{

}
