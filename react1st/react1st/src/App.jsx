 import React from "react"
 
 export const App = ()=>{
  return (
    <React.Fragment>
      
      
      <Netcard/>
      <Netcard/>
      <Netcard/>
      
    </React.Fragment>
    
    
       
  )
}

const Netcard = ()=> {
  return(
    
    <div>
      <div>
          <img src="https://images.ctfassets.net/4cd45et68cgf/Rb6wz7UfbWMR26SsqxxJL/82ba4eb884c1b2ca426a2b250d8afa86/ENUS_QueenofTears-Hae-In_CharacterKA_Vertical_RGB_PRE.jpg_ENUS_QueenofTears-Hae-In_CharacterKA_Vertical_RGB_PRE.jpg?w=1200" alt="" width="300px" height="300px" />
        </div>
        <h2>Name: Queen of Tears</h2>
        <h3>Rating:8.2</h3>
        <p>Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quod aliquam ducimus consequuntur porro. Reiciendis fugiat, <br /> rerum delectus mollitia quidem nemo!</p>
    </div>
    
  )
}
