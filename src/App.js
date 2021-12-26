import React, { Fragment } from "react";
import InputToDo from "./components/InputToDo";
import ListToDo from "./components/ListToDo";
import { TaskProvider } from "./contexts/TaskContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Fragment>
      <ToastContainer />

      <TaskProvider>
      <h2 className="text-center mt-5 text-uppercase fw-bolder">Lista de actividades</h2>
        <div className="container mt-5">
          <InputToDo />
          <ListToDo />
        </div>
      </TaskProvider>
    </Fragment>
  )
}

export default App;