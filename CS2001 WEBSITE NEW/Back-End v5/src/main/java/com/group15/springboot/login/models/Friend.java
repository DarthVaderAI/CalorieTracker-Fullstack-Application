package com.group15.springboot.login.models;

import javax.persistence.*;

//Setting Roles
@Entity
@Table(name = "friend")
public class Friend {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;


  @Column(length = 20)
  private Integer userId;

  @Column(length = 20)
  private String username;

  @Column(length = 20)
  private String friendName;

  @Column(length = 20)
  private Integer friendId;

  @Column(length = 20)
  private String friendEmail;

  public Friend() {

  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getUserId() {
    return userId;
  }

  public void setUserId(Integer userId) {
    this.userId = userId;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getFriendName() {
    return friendName;
  }

  public void setFriendName(String friendName) {
    this.friendName = friendName;
  }

  public Integer getFriendId() {
    return friendId;
  }

  public void setFriendId(Integer friendId) {
    this.friendId = friendId;
  }

  public String getFriendEmail() {
    return friendEmail;
  }

  public void setFriendEmail(String friendEmail) {
    this.friendEmail = friendEmail;
  }
}
