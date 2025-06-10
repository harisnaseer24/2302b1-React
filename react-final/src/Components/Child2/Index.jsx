import React from 'react'

const Child2 = ({games}) => {
  return (
    <div>
      <h1>Child 2</h1>
      {games.map((game,index)=>{
return(<h3 key={index}>{game}</h3>)
      })}
    </div>
  )
}

export default Child2
