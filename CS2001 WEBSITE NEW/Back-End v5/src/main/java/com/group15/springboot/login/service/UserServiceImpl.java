package com.group15.springboot.login.service;

import com.group15.springboot.login.bean.ResultBean;
import com.group15.springboot.login.models.User;
import com.group15.springboot.login.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ClassName : UserServiceImpl
 * @Description :
 * @Author : Ming
 */
@Service
public class UserServiceImpl {

    @Autowired
    UserRepository userRepository;


    public ResultBean save(User user){
        try {

            User save = userRepository.save(user);
            return new ResultBean().success();
        } catch (Exception e) {
            e.printStackTrace();
            return new ResultBean().failure("用户已存在");
        }
    }



    public ResultBean login(User user){
        try {
            User u = userRepository.findByUsername(user.getUsername()).get();
            if(u == null){
                return new ResultBean().failure("用户不存在");
            }

            if(user.getPassword().equals(u.getPassword())){
                return new ResultBean().success();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResultBean().failure("用户已存在");
        }
        return new ResultBean().failure();
    }


    public ResultBean search(String name){
        List<User> usernameList = userRepository.findByUsernameLike("%" + name + "%");
        return new ResultBean().success(usernameList);
    }


}
