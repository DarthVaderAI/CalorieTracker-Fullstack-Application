package com.group15.springboot.login.service;

import com.group15.springboot.login.bean.ResultBean;
import com.group15.springboot.login.form.FriendForm;
import com.group15.springboot.login.models.Friend;
import com.group15.springboot.login.models.Message;
import com.group15.springboot.login.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 * @ClassName : FriendServiceImpl
 * @Description :
 * @Author : Ming
 */
@Service
public class MessageServiceImpl {

    @Autowired
    private MessageRepository messageRepository;


    public ResultBean save(Message msg){
        Message save = messageRepository.save(msg);
        return new ResultBean().success();
    }




}
