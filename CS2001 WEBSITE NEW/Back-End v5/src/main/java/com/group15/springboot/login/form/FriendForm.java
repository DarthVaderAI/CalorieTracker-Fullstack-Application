package com.group15.springboot.login.form;

/**
 * @ClassName : FriendForm
 * @Description :
 * @Author : CJH
 * @Date: 2022-02-17 23:17
 */
public class FriendForm {
    private String friendName;
    private Integer pageNum;
    private Integer pageSize;

    public String getFriendName() {
        return friendName;
    }

    public void setFriendName(String friendName) {
        this.friendName = friendName;
    }

    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }
}


