import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {NewTODO} from "./NewTODO";

function App() {
  return (
      <>
          <NewTODO addTodo={alert}/>
      </>
  );
}

export default App;
