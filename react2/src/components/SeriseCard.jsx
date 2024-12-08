 export const SeriseCard = (props)=>{
    console.log(props);
    // eslint-disable-next-line react/prop-types
    const {img_url, name, rating, description, cast, genre, watch_url} = props.e
    
    return(
                
        <li className="li">
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
          
          <h1> completed #15th video. baaki ka kal kyuli bill bhi banana hai aaj nahi kal kunga, aaj thak gya hun kal vdo inline css</h1>
          aaj bhi rest kyuki aaj man ni krra hai kal se krunga, aaj mind thoda disturb hai 
          
          satu
          </li>
                
              )
 }