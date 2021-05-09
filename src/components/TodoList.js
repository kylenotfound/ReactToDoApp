import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList(props) {

  const [todos, setTodos] = useState([]);
  
  /** A const function that handles adding a Todo to the list */
  const addTodos = todo =>  {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;   //some fancy stuff to handle formatting of the entry of a todo
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  /** A const function that handles editinga Todo to the list */
  const editTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;   //some fancy stuff to handle formatting of the entry of a todo
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id);
      setTodos(removeArr);
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h2>What is on the agenda for today?</h2>
      <TodoForm onSubmit={addTodos}/>
      <Todo 
        todos={todos}
        completeTodo={completeTodo}
        editTodo={editTodo}
        removeTodo={removeTodo}
      />
    </div>
  )
}

export default TodoList
