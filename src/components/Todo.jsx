import React from 'react'
import {GoTrash} from 'react-icons/go'
import './ToDo.css';

const Todo = (props) => {
<h2>ToDoApp</h2>

  return (
    <ul>

    <li className='li'>
      <span><input onClick={()=>props.checktodo(props.item.id)} type="checkbox" defaultChecked={props.item.check}/></span>
      <span style={{textDecoration: props.item.check && 'line-through'}}> {props.item.task}</span>
     <span onClick={()=>props.deleteTodo(props.item.id)}> <GoTrash/> </span>
      </li>
    </ul>
  )
}

export default Todo
