 import React from "react"
 import Netcard ,{ Head, Footer } from "./components/Netcard"
//  import { head } from "./components/Netcard"
 
 export const App = ()=>{
  return (
    <React.Fragment>
      
      <Head/>
      <Netcard/>
      <Netcard/>
      <Netcard/>
      <Netcard/>
      <Footer/>
    </React.Fragment>
    
    
       
  )
}

