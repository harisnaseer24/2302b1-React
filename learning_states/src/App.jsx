import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
//   let age = 45;
//  let changeAge=()=>{
// age=50;
// console.log(age)
//   }
let [age, setAge]= useState(45);

let [name,setName]=useState("")

const getData=()=>{
  let name= document.getElementById("name").value;
  setName(name);
}

  return (
    <>
      <div className="container">
        <h1 className="text-center display-4">Learning React States</h1>
        {/* <p>{age}</p> */}
        {/* normal variable */}
        {/* <button onClick={()=>{ changeAge()}}>Change Age</button> */}
        {/* state variable */}
        {/* <button onClick={()=>{ setAge(age=>age+1)}}>Increment State Age</button> */}
        {/* <button onClick={()=>{ setAge(age=>age-1)}}>Decrement State Age</button> */}

 
        {/* <input type="text" id="" onChange={(e)=>{setName(e.target.value)}} value={name}  className="form-control" placeholder="Enter your name" /> */}


        <input type="text"  id="name" className="form-control" placeholder="Enter your name" />
        <button onClick={()=>{
        getData()
        }}>Submit</button>

{
  name !== "" ?
  <h2>Student name: {name}</h2>:
  <></>


}
      
      </div>
    </>
  );
}

export default App;
