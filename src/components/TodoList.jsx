import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
<h2>ToDoApp</h2>

  const todos = props.todoData.map((item, index)=>{
    return <Todo key={item.id} item={item} deleteTodo={props.deleteTodo} checktodo = {props.checktodo}/>
  })

  return (
    <div>{todos}</div>
  )
}

export default TodoList