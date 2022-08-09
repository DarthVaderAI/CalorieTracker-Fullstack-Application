package com.group15.springboot.login.models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="bodymeasurement")
public class measurements {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    
    @Column(name = "chest")
    private double chest;
    
    @Column(name = "arms")
    private double arms;
    
    @Column(name = "waist")
    private double waist;
    
    @Column(name = "thighs")
    private double thighs;
    
    @Column(name = "calfs")
    private double calves;
    
    @Column(name = "weight")
    private double weight;
    
    @Column(name = "notes")
    private String notes;

    
    public measurements() {
        // TODO Auto-generated constructor stub
    }
    
    public measurements(double thighs, double arms, double chest, double weight, String notes, double calves ) {
        // TODO Auto-generated constructor stub
        this.calves= calves;
        this.notes=notes;
        this.thighs=thighs;
        this.arms=arms;
        this.chest=chest;
        this.weight=weight;
    }
    
    

    public double getThighs() {
        return this.thighs;
    }
    public void setThighs(double thighs) {
        this.thighs = thighs;
    }
    
    
    
    public double getArms() {
        return this.arms;
    }
    public void setArms(double arms) {
        this.arms = arms;
    }
    
    
    public double getChest() {
        return this.chest;
    }
    public void setChest(double chest) {
        this.chest = chest;
    }
    
    
    public double getWaist() {
        return this.waist;
    }
    public void setWaist(double waist) {
        this.waist = waist;
    }
    
    
    public double getCalves() {
        return this.calves;
    }
    public void setCalves(double calves) {
        this.calves = calves;
    }
    
    public double getWeight() {
        return this.weight;
    }
    public void setWeight(double weight) {
        this.weight = weight;
    }
    
    public String getNotes() {
        return this.notes;
    }
    public void setNotes(String notes) {
        this.notes = notes;
    }
    
    

}
