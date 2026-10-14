
export function MyName({ Class }){
  return (
    <div>
      {Class.map((student, index) => (
        <h3 key={index}>
          Student {index + 1}: {student}
        </h3>
      ))}
    </div>
  )
}
