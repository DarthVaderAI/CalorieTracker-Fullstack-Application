import React from 'react'
import AuthService from "../services/auth.service";

export const ProfilePage = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div>   
    <div className = "settingsmain">
    <h1 className ="sethead"> Public profile </h1>
      <form className = "form">  

        <label className= "profile_title">
        Name 
        <input type ="text" readOnly className="place" type="text" name ="userName" placeholder = {currentUser.username} ></input>

        </label>

        <textarea className ="place_bio" placeholder = "Tell me about your goals in a few words">    
        </textarea>

        <label className= "profile_title">
        Height
        <input type ="text" readOnly className="place" type="text" name ="height" placeholder = "185cm"></input>
        </label>

        <label className= "profile_title">
        Weight 
        <input type ="text" readOnly className="place_count" type="text" name ="weight" placeholder = "86kg"></input>
        </label>

        <label className= "profile_title">
        Goal
        <select name ="goal" className="place_count" type="text"  placeholder = "">
        <option value = "Loseweight"> Lose weight</option>
        <option value = "Loseweight"> Maintain weight</option>
        <option value = "Loseweight"> Gain weight</option>
        </select>
        </label>

        <label className="profile_title">
        Deadline
        <input className="place" type="date" id="target_date" name="target"></input>
        </label>
        <button className="submitbtn" type="button"> Update profile </button>
      </form>
</div>



</div>
    
  )
}


