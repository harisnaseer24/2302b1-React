import React, { useEffect, useState } from 'react'

const ApiData = ({product}) => {

// getData();

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  )
}

export default ApiData
