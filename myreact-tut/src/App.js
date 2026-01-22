import React from "react";
import list from "./component/list";
const App =()=>{
   
  let arr = ['apple','mango','banana','orange','thursday']

  return(
    <div>
      {arr.map((item)=>{
        return <list props ={item}/>
      })}
    </div>
  )
}

export default App;