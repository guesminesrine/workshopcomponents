import React from 'react'
import "./FullName.css"

const FullName = () => {
  let user = {
    Name: "Amour", 
    }
  return (
    <div>
      <h1
        style={{
          fontSize: "60px",
          paddingLeft: "260px",
          fontFamily: "Rubik Moonrocks",
        }}
      >
        {" "}
        {user.Name}
      </h1>
    </div>
  );
}

export default FullName