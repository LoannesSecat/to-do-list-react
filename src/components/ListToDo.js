import React, { useContext, Fragment } from "react";
import taskContext from "../contexts/TaskContext";

const ListToDo = () => {
    const
        { tasks, deleteData, changeInputText, options } = useContext(taskContext),
        tasksList = tasks,
        eS = tasksList.length > 1 ? "s" : "";

    if (!tasksList.length) {
        return (<h4 className="text-center">Sin tareas por ahora</h4>)
    } else {
        return (
            <Fragment>
                <div className="col pt-1" style={{ maxHeight: "75vh", overflowY: "auto", overflowX: "hidden" }}>
                    {
                        tasksList.map(item => (
                            <div key={item.key} className="row justify-content-center mb-2">
                                <span className="col">{item.task}</span>

                                <div className="col-2 justify-content-center align-items-center">
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

                <div className="fw-light text-end mt-3">Tiene {tasksList.length} tarea{eS} pendiente{eS}</div>
            </Fragment>
        )
    }
}

export default ListToDo;