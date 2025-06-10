import React from 'react'

const Child1 = ({setgame,games}) => {
    
  return (
    <div>
      <h1>Child1</h1>
      <h2 >Add Fortza</h2>
<button onClick={()=>{setgame([...games,"Fortza"])}}>Click here</button>
    </div>
  )
}

export default Child1
