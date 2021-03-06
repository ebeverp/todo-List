import React, {ChangeEvent, useState} from 'react';

interface Props{
    addTodo (todo:string):void;
}

export const NewTODO: React.FC<Props> = ({addTodo}) => {
    const[todo, setTodo] = useState("");

    const change = (events:ChangeEvent<HTMLInputElement>) =>{
        setTodo(events.target.value)
    }
    const on_Click =() => {
        addTodo(todo)
        setTodo("")
    }
    return(
    <div>
        <input onChange ={change} value={todo} type="text" name="todo" placeholder='Todo'/>
        <button onClick= {on_Click} >Add TODO </button>
    </div>
    );
};

