import React, { useContext } from "react";
import TaskContext from "../contexts/TaskContext";

const ListToDo = () => {
    const
        { tasks, deleteData, changeInputText, options } = useContext(TaskContext),
        tasksList = tasks,
        eS = tasksList.length > 1 ? "s" : null;

    if (!tasksList.length) {
        return (<h4>Sin tareas por ahora</h4>)
    } else {
        return (
            <div className="list-todo">
                <div className="mapper">
                    {
                        tasksList.map(item => (
                            <div key={item.key}>
                                <span>{item.task}</span>

                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-warning"
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

                <span>Tiene {tasksList.length} tarea{eS} pendiente{eS}</span>
            </div>
        )
    }
}

export default ListToDo;