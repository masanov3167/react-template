import React, {useState} from "react";
import Hidden from "./Components/Hidden";
import TodoItem from "./Components/TodoItem";

import  "./main.css";

const Home = () =>{

    const [todos, setTodos] = useState([]);
    
      function createTodo(evt){
        const newTodo = {
          id: todos[todos.length -1]?.id + 1 || 0,
          title: evt.target.value,
          isComplated: false
        }
    
        if(evt.code === "Enter"){
          return setTodos([...todos, newTodo]);
        }
      }

      function delbtn(evt){
        const btnId = evt.target.dataset.todoId - 0;
        console.log(btnId);
    
        const filter = todos.filter(a => a.id !== btnId);
        return setTodos(filter)
      }
    

    return (
        <div>
            <Hidden />
        <h2 className="todo-title">Simple todo list</h2>

        <input className='input' onKeyUp={createTodo} type="text" placeholder='type something...' maxLength="25" required />

        <ol className="todo-list">
            {/* <TodoItem /> */}
            {
              todos.map(item => (
                // <li data-todo-id={item.id}> {item.id} {item.title} <input type="checkbox" /> <button onClick={delbtn}>del</button> </li>

                <TodoItem id={item.id} title={item.title} dataset={item.id} forId={item.id} delfunc={delbtn} />

                // <li className="list-item">
                // <input id={item.id} type="checkbox"/>
                // <label for={item.id} >{item.title}</label>
                // <span className="del" onClick={delbtn} data-todo-id={item.id}></span>
        // </li>
              ))
            }
        </ol>
        </div>
    )
} 

export default Home;