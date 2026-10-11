import { useState } from "react"
import { MyName } from "./Header"

export function Addition(){
  console.log("test")

  const School = {
    class : 36,
    teachers : "Twenty",
    Students : "Thousand"
  }
  // const [name , updateName] = useState(true)

  // function toggleFun(){
  //   if(name === true){
  //     return updateName(false)
  //   } if(name === false){
  //     return updateName(true)
  //   }
    
  // }
  // function changeFrt(){
  //   IncreaseNUM(number + 1)
  // }
  // function alertFun(fruit){
  //   return alert(fruit)
  // }


  // function friendCircle(f1, f2, f3){
  //   return (
  //     <div>
  //       <h1>{f1}</h1>
  //       <h1>{f2}</h1>
  //       <h1>{f3}</h1>
  //     </div>
  //   )
  // }
  return (
    // <div>


    //   {/* {
    //     name === true? <h1>AMAN</h1> : null
    //   }
    //   <button onClick={toggleFun}>click to hide</button> */}
      


    // </div>
    <MyName School={School}/>
  )
}

