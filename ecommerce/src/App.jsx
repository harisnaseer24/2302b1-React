import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import Footer from './components/Footer/Index'
// import './App.css'

function App() {
  const products=[
    {
      id:1,
      name:'Product 1',
      price:100
    },
    {
      id:2,
      name:'Product 2',
      price:200
    },
    {
      id:3,
      name:'Product 3',
      price:300
    },
    {
      id:4,
      name:'Product 4',
      price:400
    },
   
  ]

  return (
 <>
 <Navbar/>
 <div className="container">
  <div className="row">
    <Card price={88} id={56}/>
{
products.map((product ,index)=>{
return <Card key={index} id={product.id} name={product.name} price={product.price}/>
})

}


 {/* <Card id={1} name="abc" price={343}/> */}
 {/* <Card/>
 <Card/>
 <Card/> */}

  </div>
 </div>

 <Footer/>

 </>
    
  )
}
export default App
