package com.group15.springboot.login.controllers;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.group15.springboot.login.models.measurements;
import com.group15.springboot.login.repository.measurementRepository;


	@RestController
	public class measurementController {

	    @Autowired
	    private measurementRepository rep;

	    @CrossOrigin
	    @PostMapping ("/save")
	    public void saveMeasurements(@RequestBody measurements data ) {



	        if(Objects.nonNull(data)) 
	        {
	        	
	            //return "redirect:" + url;
	            //return new ResponseEntity(HttpStatus.OK);

	            rep.save(data);
	        } 

	        else 
	        {

	        }
	    }





	}

