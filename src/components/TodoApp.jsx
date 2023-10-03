import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import InputForm from './InputForm'
// import {v4 as uuid} from 'uuid'

const TodoApp = () => {
<h2>ToDoApp</h2>
  
  let dummyData = 
    JSON.parse(localStorage.getItem('todos')|| "[]")
    

  let [todos, setTodos] = useState(dummyData)

  function addTodo(todo){
    setTodos([...todos, todo]);
  }
  
  function deleteTodo(id){
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  }
  function checktodo(id){
    setTodos((prevStste)=>{
      return prevStste.map(item=>item.id===id?{...item,check:!item.check}:item)
    })
  }
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
    // console.log('Changed')
  },[todos])

  return (
    <>
      <InputForm todoData={todos} addTodo={addTodo}/>
      <TodoList todoData={todos} deleteTodo={deleteTodo} checktodo = {checktodo}/>
    </>
  )
}

export default TodoApp