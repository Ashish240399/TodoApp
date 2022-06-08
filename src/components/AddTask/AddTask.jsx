import React, { useEffect, useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({datafn,length}) => {
  // NOTE: do not delete `data-testid` key value pair
  
  
  const [newTodo,setNewTodo]=useState({
    id:length,
    text:"",
    done:false,
    count:1
  })
  function handleChange(e){
    setNewTodo({
      id:length+1,
      text:e.target.value,
      done:false,
      count:1
    })
  }
  function handleSubmit(){
    datafn(newTodo)
  }
  
  //console.log(todo)
  return (
    <div className={styles.todoForm}>
      
      <input onChange={handleChange} data-testid="add-task-input" type="text" placeholder="Add Task"/>
      <button onClick={()=>{
        handleSubmit();
      }} data-testid="add-task-button"><b>+</b></button>
    </div>
  );
};

export default AddTask;
