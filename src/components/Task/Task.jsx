import React, { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
import "./task.module.css"
const Task = ({allTodos,index,checkbox}) => {
  
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className="main">
    {allTodos!==undefined && allTodos.map((el)=>(
      <li data-testid="task" className={styles.task}>
      <div style={{display:"flex"}}>
      <input onChange={()=>{
        checkbox(el.id)
      }} type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text" style={{width:"100px"}}>{el.text}</div>
      {/* Counter here */}
      <Counter valueCount={el.count}/>
      <button onClick={()=>{
        index(el.id)
      }} data-testid="task-remove-button">x</button>
    </div>
    </li>
    ))}
    </div>
  );
};

export default Task;
