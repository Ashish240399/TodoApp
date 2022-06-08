import React, { useState } from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({allData,index,check}) => {
  
  const findIndex=(data)=>{
    
    index(data)
  }
  const checkbox=(data)=>{
    check(data)
  }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        
        <Task allTodos={allData} index={findIndex} checkbox={checkbox}/>
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
