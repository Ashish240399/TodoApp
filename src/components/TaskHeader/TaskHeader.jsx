import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({inc,com}) => {
  // sample values to be replaced
  let totalTask = inc;
  let unCompletedTask = com;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      
      Yet to complete:<b data-testid="header-remaining-task">{unCompletedTask}</b>
      <div>Completed:<b data-testid="header-total-task">{totalTask}</b></div>
    </div>
  );
};

export default TaskHeader;
