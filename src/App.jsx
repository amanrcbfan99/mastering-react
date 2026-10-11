import { useState } from "react"

export function Addition(){
  
  const [number, IncreaseNUM] = useState(1)

  function changeFrt(){
    IncreaseNUM(number + 1)
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
      <h1>Click counter</h1>
      <h1>{number}</h1>
      <button onClick={changeFrt}>Click here</button>
    </div>
  )
}

