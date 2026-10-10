import { useState } from "react"

export function Addition(){
  
  const [fruit, changeFruit] = useState("Apple")

  function changeFrt(){
    changeFruit("Banana")
  }
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
    <div>
      <h1>{fruit}</h1>
      <button onClick={changeFrt}>Click to change fruit</button>
    </div>
  )
}

