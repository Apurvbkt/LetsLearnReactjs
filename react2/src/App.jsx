import  CardDtl  from './components/CardDtl'
// import React from 'react';
import './App.css'

function App() {

  return (
    <section className='container'>
             
      <CardDtl/>
      
      
    </section>
  )
}
   

export default App



//component created
// const CardDtl = ()=>{
//   const name = 'Cat king';
//   const rating = 8.5;
//   const sum = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iure."
//   let age = 149;
//   // let canWatch = 'not avail';
//   // if(age >= 18) canWatch = 'watch now'
//   const canWatch = ()=>{
    
//     if(age >=18) return('Watch now')
//     return 'not avail'
    
//   }
    
//     return(
//       <>
//        <div>
//           <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" alt=""  height="40%" width= "40%" />
//         </div>
//         <h2>Name: {name}</h2>
//         <h3>Rating: {rating}</h3>
//         <p>Summary: {sum} </p>
//         <button>{age >= 18 ? 'watch now' : 'not watch'}  </button>
//         {/* <button>{canWatch}</button> */}
//         <button>{canWatch()}</button>
        
//           <h1 > <b> React #6 video completed  </b></h1> 
//           <h1 > <b> React #8 video completed  </b></h1> 
          
          
//           {/* <ValueData/> */}
//       </>
//     )
  
  
// }

// const ValueData = ()=>{
//   const value = 'hello world';
  
//   return( 
//   <>  <h2>{value}</h2>
//       <h3>the result: {1+2+6}</h3>
// </>
    
//   )
// }