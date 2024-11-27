import seriesData from '../api/netflixData.json'

const CardDtl = ()=>{
      return(
        <ul>
        <li>
         <div>
            <img src= {seriesData[0].img_url} alt=""  height="40%" width= "30%" />
          </div>
          <h2>Name: {seriesData[0].name}</h2>
          <h3>Rating: {seriesData[0].rating}</h3>
          <p>Summary: {seriesData[0].description} </p>
          <p>Genre: {seriesData[0].genre} </p>
          <a href={seriesData[0].watch_url} target='_blank'>click to watch</a>
          <br />
          <button>watch now   </button>
          </li>
          <li>
         <div>
            <img src= {seriesData[1].img_url} alt=""  height="40%" width= "30%" />
          </div>
          <h2>Name: {seriesData[1].name}</h2>
          <h3>Rating: {seriesData[1].rating}</h3>
          <p>Summary: {seriesData[1].description} </p>
          <p>Genre: {seriesData[1].genre} </p>
          <a href={seriesData[1].watch_url} target='_blank'>click to watch</a>
          <br />
          <button>watch now   </button>
          </li>
          <li>
         <div>
            <img src= {seriesData[2].img_url} alt=""  height="40%" width= "30%" />
          </div>
          <h2>Name: {seriesData[2].name}</h2>
          <h3>Rating: {seriesData[2].rating}</h3>
          <p>Summary: {seriesData[2].description} </p>
          <p>Genre: {seriesData[2].genre} </p>
          <a href={seriesData[2].watch_url} target='_blank'>click to watch</a>
          <br />
          <button>watch now   </button>
          </li>
          <li>
         <div>
            <img src= {seriesData[3].img_url} alt=""  height="40%" width= "30%" />
          </div>
          <h2>Name: {seriesData[3].name}</h2>
          <h3>Rating: {seriesData[3].rating}</h3>
          <p>Summary: {seriesData[3].description} </p>
          <p>Genre: {seriesData[3].genre} </p>
          <a href={seriesData[3].watch_url} target='_blank'>click to watch</a>
          <br />
          <button>watch now   </button>
          </li>
          {/* <button>{canWatch}</button> */}
          {/* <button>{canWatch()}</button> */}
          
           
            
            
            
            <h1 > <b> React #11 video completed  </b></h1>  
            
            
            
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
      