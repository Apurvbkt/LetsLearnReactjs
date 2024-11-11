

const CardDetails = (props)=>{
    return(
        <li >
        <div>
            <img src={props.e.img_url} alt="" width="40%" height="40%" />
          </div>
          <h2>Name: {props.e.name}</h2>
          <h3>Rating:{props.e.rating}</h3>
          <p>Summary: {props.e.description}</p>
          <p>Gerenal : {props.e.genre}</p>
          <p>Cast: {props.e.cast}</p>
          <a href={props.e.watch_url} target="_blank">
            <button>Watch Now</button></a>          
          
          
      </li>
      ) 
}

export default CardDetails