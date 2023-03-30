
import React from 'react'
import {useState} from 'react'

const PrimerComponentes = () => {
  const[start, setStart] = useState(0);
  console.log(start)
return (
    <div>
      <h1>!!!! Hola Mundo React :-)</h1>
      <button onClick={()=>setStart(start+1)}>Boton</button>
      <h1>{start}</h1>
      
    </div>
  )
}
export default PrimerComponentes