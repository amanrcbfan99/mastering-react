
import { useState } from "react"
import { MyName } from "./Header"

export function Addition(){
  console.log("test")

  const [showStudents, setShowStudents] = useState(false);
  const [newStudent, setNewStudent] = useState("");
  const [Class, setClass] = useState([
    "Aman", "Ansh", "Pawan", "Aryan",
    "Satyam", "Rohit", "Priyanshu", "Krishna"
  ]);

  // const School = {
  //   class : 36,
  //   teachers : "Twenty",
  //   Students : "Thousand"
  // }
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

  function addStudent(){
    if(newStudent.trim() !== ""){
      setClass([...Class, newStudent]);
      setNewStudent("");
    }
  }

  return (
    <div>
      <h1>Student Management</h1>

      <input
        type="text"
        placeholder="Enter student name"
        value={newStudent}
        onChange={(e) => setNewStudent(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <h3>Total Students: {Class.length}</h3>

      <button onClick={() => setShowStudents(!showStudents)}>
        {showStudents ? "Hide Students" : "Show Students"}
      </button>

      {showStudents && <MyName Class={Class} />}
    </div>
  )
}
