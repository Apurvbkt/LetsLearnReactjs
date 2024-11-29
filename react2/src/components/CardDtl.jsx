import seriesData from '../api/netflixData.json'

const CardDtl = ()=>{
      return(
        <ul>
          { 
            seriesData.map((e) =>{
              return(
                
        <li key={e.id}>
         <div>
            <img src= {e.img_url} alt=""  height="40%" width= "30%" />
          </div>
          <h2>Name: {e.name}</h2>
          <h3>Rating: {e.rating}</h3>
          <p>Summary: {e.description} </p>
          <p>Cast: {e.cast}</p>
          <p>Genre: {e.genre} </p>
          <a href={e.watch_url} target='_blank'>click to watch</a>
          <br />
          <button>watch now   </button>
          </li>
                
              )
              
            })
          }
          
          
          
          
          
          
          {/* <button>{canWatch}</button> */}
          {/* <button>{canWatch()}</button> */}
          
           
            
            
            
            <h1 > <b> React #11 video completed  </b></h1>  
            <h1 > <b> React #12 video completed  </b></h1>  
            <h1> aaj ni ho paya, coz mummy kla patna jari hai, and unke sath shopping and sara sab kuch buy krne gye the and sara saaman pack krne me time chale gya. To jo chut gya wo kal cover krunga, thank you good night</h1>
             better to rest today coz aaj bhi bahut hectic day tha, thoda stable hone do i'll cover every thing
            good night for now
            
            
            {/* <ValueData/> */}
        </ul>
      )
    
    
  }
  
  export default CardDtl
  
  
  
  
  // const name = 'Cat king';
  //   const rating = 8.5;
  //   const sum = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iure."
  //   let age = 149;
  //   // let canWatch = 'not avail';
  //   // if(age >= 18) canWatch = 'watch now'
  //   const canWatch = ()=>{
      
  //     if(age >=18) return('Watch now')
  //     return 'not avail'
      
  //   }
      