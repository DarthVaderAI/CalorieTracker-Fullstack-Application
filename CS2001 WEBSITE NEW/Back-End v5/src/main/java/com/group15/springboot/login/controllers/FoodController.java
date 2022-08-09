package com.group15.springboot.login.controllers;

import com.group15.springboot.login.bean.ResultBean;
import com.group15.springboot.login.models.Message;
import com.group15.springboot.login.service.FoodServiceImpl;
import com.group15.springboot.login.service.MessageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @ClassName : FoodController
 * @Description :
 * @Author : Ming
 * @Date: 2022-03-12
 */
@RestController
@RequestMapping("/api/food")
public class FoodController {

    @Autowired
    private FoodServiceImpl foodService;


    @GetMapping("/get")
    public ResultBean select() {
        return foodService.list();
    }
}
