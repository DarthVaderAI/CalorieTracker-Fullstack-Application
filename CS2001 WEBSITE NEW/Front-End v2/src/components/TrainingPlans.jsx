// I have created a similar code to the motivation picture, but this time it allows the user to click a 
//button everytime they want a new picture. Feel free to use it as a component /jsx if you like it.


import { useState } from 'react'
  export const TrainingPlans = (props)=> 
   
  {   
    const url_ar= ['https://cdn.shopify.com/s/files/1/0802/1627/files/the-rock-chest-routine.jpg?v=1476194848', 'https://i.pinimg.com/originals/e9/17/ef/e917efb5614bfb5ab979c6d68ee3bbe4.jpg', 'https://darebee.com/images/workouts/big-back-workout.jpg', 'https://i.pinimg.com/originals/72/45/3b/72453b182a99aa3b7a56a672a34323e7.jpg', 'https://www.blogilates.com/wp-content/uploads/2020/03/quaratine-plan-IG-01.png'] 

    
    let initialState = url_ar[Math.floor(Math.random() * url_ar.length)]
    const [ url_motivate_img, setState] = useState(initialState)
    const clearState = () => setState(initialState )
 
const ddd=()=>{
    console.log(url_motivate_img)
    initialState = url_ar[Math.floor(Math.random() * url_ar.length)]
    clearState()
    console.log(url_motivate_img)
}
  
      
     



    return(
        <div> 
                <button onClick={ddd} className='btn btn-custom btn-lg' id=''> Get a Plan! </button>
            <img src={url_motivate_img} className="picturetrain" />
        </div>

    );
 }