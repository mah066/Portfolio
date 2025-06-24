
import React from 'react'
import "./Home.css";
import profilePic from "./images/profile.jpg"
function Home(){
    return(
        <div className='Home-page'>
        <img src={profilePic} alt="My Profile" className="profile-image" />
        <h1 className='heading'>Hello, I'm Muhammad Aazim!</h1>
        <h6 className='sub-heading'>Computer Science at University of Manchester</h6>

      </div>

    );


}
export default Home