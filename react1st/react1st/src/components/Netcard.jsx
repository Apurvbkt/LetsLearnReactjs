import netflixData from "../api/netflixData.json";


 const Netcard = ()=> {
    
  // {
  //   const name = 'queen of tears'
  //   let age = 19
  //   // let canWatch = 'Not Available'
  //   // if(age >= 18) canWatch = 'Watch Now'
    
  //   const fourStep = ()=>{
  //     if(age >= 18) return 'Watch now'
  //     return 'Not avail'
  //   }
    
    
    
  //   const genral = ()=>{
  //     const r = 'romantic'
  //     return r
  //   }
    
    
  // }
    
    
    //1st way
    // if(age < 18){
      
    //   return(
    //     <div>
    //       <div>
    //           <img src="https://images.ctfassets.net/4cd45et68cgf/Rb6wz7UfbWMR26SsqxxJL/82ba4eb884c1b2ca426a2b250d8afa86/ENUS_QueenofTears-Hae-In_CharacterKA_Vertical_RGB_PRE.jpg_ENUS_QueenofTears-Hae-In_CharacterKA_Vertical_RGB_PRE.jpg?w=1200" alt="" width="300px" height="300px" />
    //         </div>
    //         <h2>Name: {name}</h2>
    //         <h3>Rating:8.2</h3>
    //         <p>Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quod aliquam ducimus consequuntur porro. Reiciendis fugiat, <br /> rerum delectus mollitia quidem nemo!</p>
    //         <p>Gerenal : {genral()}</p>
    //         <button>Not avalbl</button>
    //     </div>
    //   )
      
    // }
    
    return( 
      <ul>
      {netflixData.map((e)=>{
        return(
        <li key={e.id}>
        <div>
            <img src={e.img_url} alt="" width="40%" height="40%" />
          </div>
          <h2>Name: {e.name}</h2>
          <h3>Rating:{e.rating}</h3>
          <p>Summary: {e.description}</p>
          <p>Gerenal : {e.genre}</p>
          <p>Cast: {e.cast}</p>
          <a href={e.watch_url} target="_blank">
            <button>Watch Now</button></a>          
          
          
      </li>
      ) 
      })}
      </ul>
    )
  }
  
  export default Netcard;





{/* //method 2 */}
          {/* <button>{age > 18 ? 'watch now' : 'not available'}</button> */}
          
          {/* method 3 */}
          {/* <button>{canWatch}</button> */}
          
          {/* method 4 */}
          {/* <button>{fourStep()}</button> */}