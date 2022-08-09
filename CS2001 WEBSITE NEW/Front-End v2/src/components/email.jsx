import React from 'react'
import AuthService from "../services/auth.service";

export const Email = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div>   
    <div className = "settingsmain">
    <h1 className ="sethead"> Emails </h1>
      <form className = "form">  

        <label className= "profile_title">
        Change email  
        <input className="place" type="text" name ="userName" placeholder = {currentUser.email}></input>
        <button type="button" className ="submitbtn">Change email</button>

        </label>

    

      </form>
</div>

</div>
    
  )
}
