import React from 'react';
import logo from './logo.svg';
import {NewTODO} from "./NewTODO";
import {useDispatch, useSelector} from "react-redux";
import {reducerInterface} from "./reducer";

function App() {
    const todos = useSelector((state :reducerInterface)=> state.todos);
    const dispatch = useDispatch()
    const add_Todo = (todo:string) => {
        dispatch({type: 'ADD_TODO', payload: todo})
    }
  return (
      <>
          <NewTODO addTodo={add_Todo}/>
              {todos.map((todo)=>{
                  return <li key={todo}> {todo}</li>
          })}
      </>
  );
}

export default App;
