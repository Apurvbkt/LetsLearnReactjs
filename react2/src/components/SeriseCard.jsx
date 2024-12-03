 export const SeriseCard = (props)=>{
    console.log(props);
    const {img_url, name, rating, description, cast, genre, watch_url} = props.e
    
    return(
                
        <li>
         <div>
            <img src= {img_url} alt=""  height="40%" width= "30%" />
          </div>
          <h2>Name: {name}</h2>
          <h3>Rating: {rating}</h3>
          <p>Summary: {description} </p>
          <p>Cast: {cast}</p>
          <p>Genre: {genre} </p>
          <a href={watch_url} target='_blank'>click to watch</a>
          <br />
          <button>watch now   </button>
          </li>
                
              )
 }