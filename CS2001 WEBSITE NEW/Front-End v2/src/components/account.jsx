import { React, useState }  from 'react';
import API from '../api/settings';
import AuthService from "../services/auth.service";

export const Account = () => {
  const currentUser = AuthService.getCurrentUser();

  let dataid = currentUser.id;

    const [id, setId] = useState('');
  
    const handleChange = event => {
          setId(event.target.value)
    };

    const handleSubmit = event => {
      event.preventDefault();
      
      API.delete(`delete/${dataid}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
      
    }

  return (
    <div>   
    <div className = "settingsmain">
    
      <form onSubmit = {handleSubmit}>  
      <h1 className ="sethead"> Change username </h1>
      <label>
        Username: 
        <input type = "string" name = "string" onChange ={handleChange} placeholder = {currentUser.username} />
      </label>
      <button type="button" className = "submitbtn">Change username</button>
      <br></br>


      <h1 className ="sethead"> Delete account </h1>
      <label>
        Person id: 
        <input type = "number" readOnly name = "id" placeholder = {currentUser.id} />
      </label>
      <button type="submit" className = "submitbtn">Delete account</button>
      </form>
</div>

</div>
    
  )
}

