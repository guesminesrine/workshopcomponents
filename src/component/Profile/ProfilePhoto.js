import React from 'react'
import image from "../../parfun.jpg";
import "./ProfilePhoto.css"
import FullName from './FullName';
import Address from './Address';

const ProfilePhoto = () => {
  return (
    <div classname="App">
     
      <img src={image}  style={{width:"650px" , height:"250px", paddingLeft:"30px"}} />
    </div>
  );
}

export default ProfilePhoto