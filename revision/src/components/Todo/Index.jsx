import React, { useState } from 'react'

const Todo = () => {
const [todos, setTodos]=useState([]);


const  AddTask=()=>{
  let task =document.getElementById("task").value;
if (task!= "") {
  

setTodos([...todos,task]);


console.log(todos);
  alert("Task added successfully")
}else{
  alert("Please enter a task")
}}


const  deleteTask=(index)=>{

  let newTodos= todos.filter((todo,i)=> i != index);
  console.log(newTodos)
  setTodos(newTodos)

}


  return (
    <>
    
    
    <div className="container">


<h1>Todo List</h1>

<input type="text"className='' id='task' placeholder='Enter a task'/>
    <button className='btn btn-info' onClick={()=>{
      AddTask()
    }}>Add</button>

<h1>My Todos</h1>
    <table class="table table-hover table-striped table-responsive">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Task</th>
      <th scope="col">Actions</th>
      
    </tr>
  </thead>
  <tbody>
    {
     todos.length > 0 ?  todos.map((todo,index)=>{
return(
<tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{todo}</td>
      <td>

        <button className='btn btn-sm btn-info mx-1' onClick={()=>{editTask(index)}}>Edit</button>
        <button  className='btn btn-sm btn-info mx-1'onClick={()=>{deleteTask(index)}}>Delete</button>
      </td>
      
    </tr>)
      }) : <h1>No task added yet</h1>
    }
   
  </tbody>
</table>
    </div>
    </>
  )
}
export default Todo
