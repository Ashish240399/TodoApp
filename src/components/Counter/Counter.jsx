import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({valueCount}) => {
  // sample value to be replaced
  const [count,setCount]=useState(valueCount)
  
  // NOTE: do not delete `data-testid` key value pair
  const handleChange=(value)=>{
    setCount(count+value)
  }
  return (
    <div className={styles.counter}>
      
        <div>
          <button onClick={()=>handleChange(+1)} data-testid="task-counter-increment-button">+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button onClick={()=>{
        if(count>1){
          handleChange(-1)
        }
      }}  data-testid="task-counter-decrement-button">-</button>
        </div>
      
    </div>
  );
};

export default Counter;
