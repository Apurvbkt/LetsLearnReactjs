 export const SeriseCard = (props)=>{
    console.log(props);
    
    
    return(
                
        <li>
         <div>
            <img src= {props.e.img_url} alt=""  height="40%" width= "30%" />
          </div>
          <h2>Name: {props.e.name}</h2>
          <h3>Rating: {props.e.rating}</h3>
          <p>Summary: {props.e.description} </p>
          <p>Cast: {props.e.cast}</p>
          <p>Genre: {props.e.genre} </p>
          <a href={props.e.watch_url} target='_blank'>click to watch</a>
          <br />
          <button>watch now   </button>
          </li>
                
              )
 }