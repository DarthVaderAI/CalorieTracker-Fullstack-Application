package com.group15.springboot.login.bean;

import java.util.List;
import java.util.Map;

/**
 * @ClassName : FoodDto
 * @Description :
 * @Author : Ming
 * @Date: 2022-03-12
 */
public class FoodDto {
    private List<Map<String,Object>> breakfast;
    private List<Map<String,Object>> lunch;
    private List<Map<String,Object>> dinner;

    public List<Map<String, Object>> getBreakfast() {
        return breakfast;
    }

    public void setBreakfast(List<Map<String, Object>> breakfast) {
        this.breakfast = breakfast;
    }

    public List<Map<String, Object>> getLunch() {
        return lunch;
    }

    public void setLunch(List<Map<String, Object>> lunch) {
        this.lunch = lunch;
    }

    public List<Map<String, Object>> getDinner() {
        return dinner;
    }

    public void setDinner(List<Map<String, Object>> dinner) {
        this.dinner = dinner;
    }
}
