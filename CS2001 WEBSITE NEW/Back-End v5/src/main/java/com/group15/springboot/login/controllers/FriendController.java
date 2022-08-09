package com.group15.springboot.login.controllers;

import com.group15.springboot.login.bean.ResultBean;
import com.group15.springboot.login.form.FriendForm;
import com.group15.springboot.login.models.Friend;
import com.group15.springboot.login.service.FriendServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import javax.xml.transform.Result;
import java.util.List;

/**
 * @ClassName : FriendController
 * @Description :
 * @Author : Ming
 */
@RestController
@RequestMapping("/api/friend")
public class FriendController {

    @Autowired
    private FriendServiceImpl friendService;

    @GetMapping("/page")
    public ResultBean<Page<Friend>> selectPage(@RequestBody FriendForm form){
        Page<Friend> friends = friendService.selectPage(form);
        return new ResultBean<>().success(friends);
    }

    @GetMapping("/select")
    public ResultBean<List<Friend>> select(@RequestParam String name){
        List<Friend> select = friendService.select(name);
        return new ResultBean<>().success(select);
    }

    @GetMapping("/selectAll")
    public ResultBean<List<Friend>> selectAll(@RequestParam String username){
        List<Friend> select = friendService.selectAll(username);
        return new ResultBean<>().success(select);
    }

    @PostMapping("/save")
    public ResultBean save(@RequestBody Friend friend){
        boolean save = friendService.save(friend);
        return save == true?new ResultBean().success():new ResultBean().failure();
    }

    @PostMapping("/delete")
    public ResultBean deleteByFriendIdAndUsername(@RequestParam Integer friendId,String username ){
        boolean delete = friendService.deleteByFriendIdAndUsername(friendId,username);
        return delete == true?new ResultBean().success():new ResultBean().failure();
    }

    @PostMapping("/isExitFriend")
    public ResultBean isExitFriend(@RequestParam Integer friendId,String username){
        boolean exitFriend = friendService.isExitFriend(friendId, username);
        return exitFriend == true?new ResultBean().success(true):new ResultBean().success(false);    }


}
