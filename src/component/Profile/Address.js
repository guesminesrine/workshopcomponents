import React from 'react'
import "./Address.css";


const Address = () => {
    let infos = {
      Adress: "Ces parfums hespéridés dont vous ne pourrez vous passer",
    };


  return (
      <div>
          <h2 className='adrs'>{infos.Adress}</h2> 
    </div>
  )
}
export default Address