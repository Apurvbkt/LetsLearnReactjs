import seriesData from '../api/netflixData.json'

const CardDtl = ()=>{
      return(
        <>
         <div>
            <img src= {seriesData[0].img_url} alt=""  height="40%" width= "30%" />
          </div>
          <h2>Name: {seriesData[0].name}</h2>
          <h3>Rating: {seriesData[0].rating}</h3>
          <p>Summary: {seriesData[0].description} </p>
          <p>Genre: {seriesData[0].genre} </p>
          <button>watch now {seriesData[0].watch_url}  </button>
          
          
          {/* <button>{canWatch}</button> */}
          {/* <button>{canWatch()}</button> */}
          
           
            
            
            
            <h1 > <b> React #11 video completed  </b></h1>  
            
            
            
            {/* <ValueData/> */}
        </>
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
      