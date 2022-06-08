import React, { useEffect, useState } from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  const [avl,setAvl]=useState([{avl:-1}])
  const [checkBox,setCheckBox]=useState([{idx:-1}])
  const [aftercheck,setAfterCheck]=useState()
  var index=-1
  console.log(checkBox)
  const setIndex=(id)=>{
    console.log("if")
    setAvl([...avl,{avl:id}])
  }
  const check=(id)=>{
    console.log("ch")
    setCheckBox([...checkBox,{idx:id}])
  }
  
  // NOTE: do not delete `data-testid` key value pair
  let completed=0
  let incompleted=0;
  //console.log(avl)
  const [todos,setTodos]=useState([
    {
      "id": 1,
      "text": "Push up",
      "done": true,
      "count": 2
    },
    {
      "id": 2,
      "text": "Pull Up",
      "done": true,
      "count": 3
    },
    {
      "id": 3,
      "text": "Squats",
      "done": false,
      "count": 1
    },
    {
      "id": 4,
      "text": "Sprint",
      "done": false,
      "count": 5
    },
    {
      "id": 5,
      "text": "Stairs",
      "done": false,
      "count": 200
    }
  ])
  const getTodo=(datas)=>{
    console.log("1")
    setTodos([...todos,datas])
  }
  useEffect(()=>{
    if(avl[avl.length-1].avl!==-1){
      console.log("avl")
      setTodos(todos.filter((el)=>el.id!=avl[avl.length-1].avl))
    }
  },[avl])
  useEffect(()=>{
    if(checkBox[checkBox.length-1].idx!==-1){
      setTodos([...todos,todos[index]={
        id: todos.id,
        text: todos.text,
        done: !todos.done,
        count: todos.count
      }])
    }
  },[checkBox])
  for(var i=0;i<todos.length;i++){
      
      if(todos[i].done==false){
        incompleted++;
      }
      else{
        completed++;
      }
    }
    for(var i=0;i<todos.length;i++){
      if(todos[i].id==checkBox[checkBox.length-1].idx){
        index=i;
      }
    }
    console.log(aftercheck)
  console.log(incompleted,completed)
  console.log("todos",todos)
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <h2>Todo App</h2>
      <TaskHeader inc={incompleted} com={completed} />
      {/* Add Task */}
      <AddTask datafn={getTodo} length={todos.length}/>
      {/* Tasks */}
      <Tasks allData={todos} index={setIndex} check={check}/>
    </div>
  );
};

export default TaskApp;
