

const Card = ({title, description,price, image}) => {
  return (
   <div className="col-lg-4 col-md-6 col-sm-12 my-3">
    <div class="card" style={{width:"18rem"}}>
  <img src={image} class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}.</p>
    <a href="#" class="btn btn-primary">{price}</a>
  </div>
</div>
   </div>
  )
}

export default Card
