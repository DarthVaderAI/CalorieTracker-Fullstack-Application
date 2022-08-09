package com.group15.springboot.login.service;

import com.group15.springboot.login.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @ClassName : StudentServiceImpl
 * @Description :
 * @Author : Ming
 */
public class StudentServiceImpl {


    @Autowired
    private StudentRepository studentRepository;

}
