package com.group15.springboot.login.controllers;

import com.group15.springboot.login.bean.ResultBean;
import com.group15.springboot.login.models.Message;
import com.group15.springboot.login.service.MessageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @ClassName : FoodController
 * @Description :
 * @Author : Ming
 */
@RestController
@RequestMapping("/api/message")
public class MessageController {

    @Autowired
    private MessageServiceImpl messageService;


    @PostMapping("/save")
    public ResultBean save(@RequestBody Message msg){
        return messageService.save(msg);
    }
}
