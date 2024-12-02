 export const SeriseCard = (e)=>{
    
    return(
                
        <li>
         <div>
            <img src= {e.e.img_url} alt=""  height="40%" width= "30%" />
          </div>
          <h2>Name: {e.e.name}</h2>
          <h3>Rating: {e.e.rating}</h3>
          <p>Summary: {e.e.description} </p>
          <p>Cast: {e.e.cast}</p>
          <p>Genre: {e.e.genre} </p>
          <a href={e.e.watch_url} target='_blank'>click to watch</a>
          <br />
          <button>watch now   </button>
          </li>
                
              )
 }