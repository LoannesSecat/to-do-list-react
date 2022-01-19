import React, { useContext, Fragment } from "react";
import TaskContext from "../contexts/TaskContext";

const ListToDo = () => {
    const
        { tasks, deleteData, changeInputText, options } = useContext(TaskContext),
        tasksList = tasks,
        eS = tasksList.length > 1 ? "s" : null;

    if (!tasksList.length) {
        return (<h4 className="text-center">Sin tareas por ahora</h4>)
    } else {
        return (
            <Fragment>
                <div className="row" style={{ maxHeight: "55vh", overflowY: "auto", overflowX: "auto" }}>
                    {
                        tasksList.map(item => (
                            <div key={item.key} className="row align-items-center mb-3 ps-0">
                                <span className="col-10 text-break">{item.task}</span>

                                <div className="col-2 text-center">
                                    <button
                                        type="button"
                                        className="btn btn-warning me-3"
                                        onClick={() => changeInputText(item)}
                                        disabled={options.editDisable}
                                    >
                                        <i className="bi bi-pencil"></i>
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => deleteData(item.key)}
                                    >
                                        <i className="bi bi-check2-circle"></i>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="fw-light text-end mt-3 mb-2">Tiene {tasksList.length} tarea{eS} pendiente{eS}</div>
            </Fragment>
        )
    }
}

export default ListToDo;