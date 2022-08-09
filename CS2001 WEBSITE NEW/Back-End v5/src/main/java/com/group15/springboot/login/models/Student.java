package com.group15.springboot.login.models;

import javax.persistence.*;

//Setting Roles
@Entity
@Table(name = "student")
public class Student {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Column(length = 20)
  private String stuName;

  @Column(length = 20)
  private Integer stuNo;


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getStuName() {
    return stuName;
  }

  public void setStuName(String stuName) {
    this.stuName = stuName;
  }

  public Integer getStuNo() {
    return stuNo;
  }

  public void setStuNo(Integer stuNo) {
    this.stuNo = stuNo;
  }
}
