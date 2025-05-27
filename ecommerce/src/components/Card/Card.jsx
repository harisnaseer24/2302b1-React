import React from 'react'

const Card = ({id, name="Unknown product", price}) => {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
     <div class="card" style={{width:'18rem',}}>
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Rs . {price}</a>
  </div>
</div>
    </div>
  )
}

export default Card
