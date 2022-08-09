package com.group15.springboot.login.service;

import com.group15.springboot.login.bean.FoodDto;
import com.group15.springboot.login.bean.ResultBean;
import com.group15.springboot.login.models.Food;
import com.group15.springboot.login.models.Message;
import com.group15.springboot.login.repository.FoodRepository;
import com.group15.springboot.login.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


/**
 * @ClassName : FriendServiceImpl
 * @Description :
 * @Author : Ming
 * @Date: 2022-03-12
 */
@Service
public class FoodServiceImpl {

    @Autowired
    private FoodRepository foodRepository;


    public ResultBean list(){
        List<Food> all = foodRepository.findAll();
        Map<Integer,List<Food>> foodMap =  new HashMap<>();
        all.stream().collect(Collectors.groupingBy(Food::getType,Collectors.toList()))
                .forEach(foodMap::put);


        List<Food> breakfast = foodMap.get(0);
        ArrayList<Map<String, Object>> breakfastList = new ArrayList<>();
        for (Food food : breakfast) {
            Map<String, Object> breakfastMap = new HashMap<>();
            breakfastMap.put("name",food.getName());
            breakfastMap.put("value",food.getEnergy());
            breakfastMap.put("img",food.getImg());
            breakfastList.add(breakfastMap);
        }

        List<Food> lunch = foodMap.get(1);
        ArrayList<Map<String, Object>> lunchList = new ArrayList<>();
        for (Food food : lunch) {
            Map<String, Object> lunchMap = new HashMap<>();
            lunchMap.put("name",food.getName());
            lunchMap.put("value",food.getEnergy());
            lunchMap.put("img",food.getImg());
            lunchList.add(lunchMap);
        }

        List<Food> dinner = foodMap.get(2);
        ArrayList<Map<String, Object>> dinnerList = new ArrayList<>();
        for (Food food : dinner) {
            Map<String, Object> dinnerMap = new HashMap<>();
            dinnerMap.put("name",food.getName());
            dinnerMap.put("value",food.getEnergy());
            dinnerMap.put("img",food.getImg());
            dinnerList.add(dinnerMap);
        }


        FoodDto foodDto = new FoodDto();
        foodDto.setBreakfast(breakfastList);
        foodDto.setLunch(lunchList);
        foodDto.setDinner(dinnerList);

        return new ResultBean().success(foodDto);
    }




}
