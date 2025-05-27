import React, { useState } from 'react'

const Form = () => {

    // Controlled Component

// const [email,setEmail]=useState('')
// function Login (){

// }

const [userDetails,setUserDetails]=useState({})

let Login=()=>{
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value

    setUserDetails({
        email:email,
        pass:pass,
    })
    console.log("User Logged in")

}

  return (
    <>
    
  {/* <input type="email" onChange={(e)=>{
    console.log(e.target.value)
    setEmail(e.target.value)
  }} placeholder='Enter email' />
  <input type="password"   placeholder='Enter password'/>
    <button >Login</button>

    <div>
        {
            email!="" ? <h1>{email}</h1>: <h1>no email</h1>
        }
        
    </div> */}

 <input type="email"     id="email"  placeholder='Enter email' />
  <input type="password" id="pass"  placeholder='Enter password'/>
    <button onClick={()=>{
        Login() 
    }} >Login</button>

    <div>
        {
            userDetails.email!="" ? <h1>{userDetails.email}</h1>: <h1>no email</h1>
        }
        
    </div>
    </>
  )
}
export default Form


//product title
//product price
//expiry date
//isAvailable radio button
// category check