import React, { Fragment } from "react";
import InputToDo from "./InputToDo";
import ListToDo from "./ListToDo";
import { TaskProvider } from "../contexts/TaskContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Fragment>
      <ToastContainer />

      <TaskProvider>
        <div className="container">
          <InputToDo />
          <ListToDo />
        </div>
      </TaskProvider>
    </Fragment>
  )
}

export default App;