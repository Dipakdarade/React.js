// import React, { useState } from 'react'
// import {v4 as uuid} from 'uuid'

// const InputForm = (props) => {

//   let [input, setInput] = useState('');  

//   function submitHandler(e){
//     e.preventDefault();
//     const trimmedInput = input.trim();
//     // console.log(input);
//     const newTodo = {id:uuid(), task:trimmedInput,check:false}
    
//     props.addTodo(newTodo)
//     setInput('');
  
// }

//   function changeHandler(e){
    

//       setInput(e.target.value)
    
//   }

//   return (
//     <form  onSubmit={submitHandler}>
//         <input  className='form-control d-inline' onChange={changeHandler} type="text" placeholder='Type Here...' value={input} />
//         <button className='btn btn-sm  mt-2 d-center btn-warning'>Add</button>
//     </form>
//   )
// }

// export default InputForm
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const InputForm = (props) => {
  const [input, setInput] = useState('');

  function submitHandler(e) {
    e.preventDefault();

    // Trim the input to remove leading and trailing spaces
    const trimmedInput = input.trim();

    if (trimmedInput !== '') {
      const newTodo = { id: uuid(), task: trimmedInput, check: false };
      props.addTodo(newTodo);
    }

    setInput(''); // Clear the input field
  }

  function changeHandler(e) {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        className='form-control d-inline'
        onChange={changeHandler}
        type="text"
        placeholder='Type Here...'
        value={input}
      />
      <button className='btn btn-sm mt-2 d-center btn-warning'>Add</button>
    </form>
  );
};

export default InputForm;
