package com.group15.springboot.login.controllers;

import com.group15.springboot.login.bean.ResultBean;
import com.group15.springboot.login.models.User;
import com.group15.springboot.login.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @ClassName : UserController
 * @Description :
 * @Author : Ming
 */
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserServiceImpl userService;


    @PostMapping("/register")
    public ResultBean register(@RequestBody User user){
       return userService.save(user);
    }

    @PostMapping("/login")
    public ResultBean login(@RequestBody User user){
        return userService.login(user);
    }

    @GetMapping("/search")
    public ResultBean search(@RequestParam String name){
        return userService.search(name);
    }




}
