import seriesData from '../api/netflixData.json'
import { SeriseCard } from './SeriseCard'
const CardDtl = ()=>{
      return(
        <ul>
          { 
            seriesData.map((e) =>{
             
            return  <SeriseCard key= {e.id} e = {e}/>
              
            })
          }
          
          
          
          
            
          
          {/* <button>{canWatch}</button> */}
          {/* <button>{canWatch()}</button> */}
          
           
            
            
            
            <h1 > <b> React #11 video completed  </b></h1>  
            <h1 > <b> React #12 video completed  </b></h1>  
           
            
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
      