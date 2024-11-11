

const CardDetails = (props)=>{
    const {e} = props
    return(
        <li >
        <div>
            <img src={e.img_url} alt="" width="40%" height="40%" />
          </div>
          <h2>Name: {e.name}</h2>
          <h3>Rating:{e.rating}</h3>
          <p>Summary: {e.description}</p>
          <p>Gerenal : {e.genre}</p>
          <p>Cast: {e.cast}</p>
          <a href={e.watch_url} target="_blank">
            <button>Watch Now</button></a>          
          
          
      </li>
      ) 
}

export default CardDetails