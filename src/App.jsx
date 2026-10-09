// function Numbers(){
  
// }

export function Addition(){
  
  function alertFun(){
    alert("Button clicked")
  }
  const studentObj = {
    Aman : "second Year",
    Ansh  : "First Year",
    Pawan  : "Twelth"
  }


  function friendCircle(f1, f2, f3){
    return (
      <div>
        <h1>{f1}</h1>
        <h1>{f2}</h1>
        <h1>{f3}</h1>
      </div>
    )
  }
  const a = 10;
  const b = 20;
  return (
    <div>
      <h3>First Number : 10</h3>
      <h3>Second Number : 20</h3>
      <h1>Addition of numbers are {a+b}</h1>
      <h1>Current class of aman : {studentObj.Aman } </h1>
      <h1>Current class of Pawan : {studentObj.Pawan}</h1>
      <h1>{friendCircle("Kartikeya", "Divyansh", "Chandan")}</h1>
      <button onClick={alertFun} >Click Me</button>
    </div>
  )
}

