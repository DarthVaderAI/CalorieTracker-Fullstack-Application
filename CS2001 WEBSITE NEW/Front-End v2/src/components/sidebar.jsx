import React from 'react'
import {Link } from "react-router-dom";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

function Sidebar() {
  return (
<nav className = "snavbar"> 
      <ul className = "nav-links">  
        <li>
            <Link to="/Register" className="fa fa-fw fa-home">Home</Link>
        </li>
        <li>
            <Link to="/profilePage" className="fa fa-fw fa-user">Profile</Link>  
        </li>  
        <li>
            <Link to="/account" className="fa fa-fw fa-gears">Account</Link>
        </li>
        <li>
            <Link to="/email" className="fa fa-fw fa-envelope">Email</Link>
        </li>
        <li>
            <Link to="/terms" className="fa fa-fw fa-user" >Terms</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar