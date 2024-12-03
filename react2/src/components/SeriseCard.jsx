 export const SeriseCard = (props)=>{
    console.log(props);
    const {e} = props
    
    return(
                
        <li>
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
 }