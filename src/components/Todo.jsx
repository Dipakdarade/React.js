import React from 'react'
import {GoTrash} from 'react-icons/go'

const Todo = (props) => {
  return (
    <li>
      <span><input onClick={()=>props.checktodo(props.item.id)} type="checkbox" defaultChecked={props.item.check}/></span>
      <span style={{textDecoration: props.item.check && 'line-through'}}> {props.item.task}</span>
     <span onClick={()=>props.deleteTodo(props.item.id)}> <GoTrash/> </span>
      </li>
  )
}

export default Todo
