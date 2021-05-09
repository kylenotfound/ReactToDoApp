import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();   //automatically puts our cursor in the input box
  });

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleNewTodo = e => {
    e.preventDefault(); //prevent submit button from refreshing tab
    
    props.onSubmit({
        id: Math.floor(Math.random() * 1000), //create an id for the new To Do. We need an id to refernece for editing, removing etc.
        text: input
    });

    setInput('');
  };  

  return (
    <form className="todo-form" onSubmit={handleNewTodo}>
      <input type="text" 
        placeholder="Enter a task..." 
        value={input} 
        name="text" 
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}/>
        <button className="todo-button">Enter</button>
    </form>
  )
}

export default TodoForm
