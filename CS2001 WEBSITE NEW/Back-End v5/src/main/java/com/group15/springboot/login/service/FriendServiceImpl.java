package com.group15.springboot.login.service;

import com.group15.springboot.login.form.FriendForm;
import com.group15.springboot.login.models.Friend;
import com.group15.springboot.login.repository.FriendRepository;
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
public class FriendServiceImpl {

    @Autowired
    private FriendRepository friendRepository;


    public List<Friend> selectAll(String username){
        List<Friend> all = friendRepository.findByUsername(username);
        return all;
    }

    public Page<Friend> selectPage(FriendForm form){
        Pageable of = PageRequest.of(form.getPageNum(), form.getPageSize());
        Page<Friend> friends = friendRepository.findByName(form.getFriendName(), of);
        return friends;
    }

    public List<Friend> select(String name){
        List<Friend> friends = friendRepository.findAllByFriendName(name);
        return friends;
    }


    public boolean save(Friend friend){
        Friend friend1 = friendRepository.save(friend);
        return friend1 == null?false:true;
    }

    public boolean deleteByFriendIdAndUsername(Integer friendId,String username){
        List<Friend> friendList = friendRepository.findByFriendIdAndUsername(friendId, username);
        for (Friend friend : friendList) {
            friendRepository.delete(friend);
        }
        return true;
    }

    public boolean isExitFriend(Integer friendId,String username){
        List<Friend> friendList = friendRepository.findByFriendIdAndUsername(friendId, username);
        return friendList.size()>0?true:false;
    }


}
