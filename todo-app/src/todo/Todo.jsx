import React ,{useState}from 'react'
import './Todo.css';
const Todo = () => {
  const [state,setState]=useState([])
  const [task,setTask]=useState()
 
  const AddTask=()=>{
    console.log(task);
    
    setState([...state,task])
    setTask('')
  }
  
  const AddTag=(e)=>{
    setTask(e.target.value)

  }

  const edit=()=>{
   
  }
 const deletetask = (index) => {
  const newTask = state.filter((item, i) => i !== index)
  setState(newTask)
}
  return (
 <div className="todo-container">


    {state.map((item,index)=>{
      return <><h1 key={index}>{item}</h1>


   
        <button onClick={() => deletetask(index)}>del</button>
      <button onClick={edit}>edit</button>
      </>
    })}
 
     <input type="text" name="task" value={task} onChange={AddTag}/>
      <button onClick={AddTask}>add</button>
    </div>
  )
}

export default Todo
