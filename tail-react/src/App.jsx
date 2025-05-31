import { useState,useId } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import loader from "./assets/loader.gif"

import { useFormStatus } from 'react-dom'

// function MyForm(){

//   let uniqueId= useId();
//   const {pending} = useFormStatus();
//   return(
// <div>
//     <input type="text"  placeholder='enter name' id={"name"+uniqueId}/>
//     <label htmlFor={"name"+uniqueId}>Name</label>

// <br />
// <input type="password"  placeholder='enter pasword' id={"pass"+uniqueId}/>
// <label htmlFor={"pass"+uniqueId}>Password</label>
// <br />
// <button disabled={pending} >Submit</button>
//   </div>
  
//   )
// }


function App() {


const [isLoading,setIsLoading]=useState(true);

setTimeout(()=>{
setIsLoading(false);
},2000);

// const handleSubmit=async()=>{
// await
//   new Promise((resolve)=>{
//     setTimeout(()=>{
//       console.log("form submitted");
//      resolve();
//     },2000)
//   })
// }

  return (
    <>
   {/* <Home/> */}
{isLoading ? <img src={loader}/> : <Home/>}
{/* <form action={handleSubmit}> */}

{/* <MyForm/> */}
{/* </form> */}
{/* <MyForm/>
<MyForm/> */}
    </>
  )
}

export default App
