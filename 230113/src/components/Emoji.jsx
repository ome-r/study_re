import React from 'react'
import { useState } from 'react'

export default function Emoji() {
    const [count, setCount] = useState(0);
  return (
<>
    <button onClick={()=>{setCount(count+1)}}>{count<=10 ? "🚀": "⚛️"}</button><br/>
    <span>{count}</span>
</>  )
}
