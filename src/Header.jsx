
export function MyName({ Class, removeStudent }){
  return (
    <div>
      {Class.map((student, index) => (
        <div key={index}>
          <h3>
            Student {index + 1}: {student}
          </h3>

          <button onClick={() => removeStudent(index)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}
