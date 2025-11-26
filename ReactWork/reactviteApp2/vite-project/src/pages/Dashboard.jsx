import React, { use, useEffect, useState } from 'react'

function Dashboard() {

  const [counter,setCounter] = useState(10);
  const[pointer,setPointer]=useState(100);
  useEffect(() => {
    console.log(counter);
    console.log(pointer)
  },[counter,pointer])
  return (
    <div>
      <h2>Counter value={counter}</h2>
      <h2>Pointer value{pointer}</h2>
      <button onClick={()=>setCounter(counter+10)}>Counter</button>
      <button onClick={()=>setPointer(pointer-10)}>Pointer</button>
    </div>
  )
}

export default Dashboard
