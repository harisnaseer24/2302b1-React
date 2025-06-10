import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './Components/Child1/Index';
import Child2 from './Components/Child2/Index';

function App() {
  // const [students,setStudents] = useState(["Haris","Ali","Ahmed","Awais","Hassan","Hammad","Haseeb","Hafsa","Hina","Hira"]);


  //Derived State
  // let studentCount = students.length;

  //Uplifting State
  const [games,setGames]= useState(["COD","Fortnite","PUBG","GTA VI"]);
  return (
    <>
  {/* // <h1>Learning Derived states</h1>
  // <h1>Total Student: {studentCount}</h1>
  // <button onClick={()=>{setStudents([...students,"Bilal"])}}>Add Bilal</button> */}


  <h1>Learning State uplifting</h1>
<Child1 setgame={setGames} games={games}/>
<Child2  games={games}/>

    </>
  )
}

export default App
