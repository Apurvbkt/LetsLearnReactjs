

const CardDetails = ({e})=>{
    const {id,img_url, name, rating, description, cast, genre, watch_url } = e;
    return(
        <li >
        <div>
            <img src={img_url} alt="" width="40%" height="40%" />
          </div>
          <h2>Name: {name}</h2>
          <h3>Rating:{rating}</h3>
          <p>Summary: {description}</p>
          <p>Gerenal : {genre}</p>
          <p>Cast: {cast}</p>
          <a href={watch_url} target="_blank">
            <button>Watch Now</button></a>    
            <p>aaj ni ho paya, kal bhi muskil hai, I,ll try ki jitna pending hai sara ek din me cover krne ka 
                
                aaj  bhi rst, aaj bhi ni hua </p>      
          
          
      </li>
      ) 
}

export default CardDetails