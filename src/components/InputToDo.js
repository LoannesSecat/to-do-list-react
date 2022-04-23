import { useContext, useState, useEffect } from "react";
import TaskContext from "../contexts/TaskContext";

const InputToDo = () => {
    const { createData, options, updateData, changeInputText, emptyValue } = useContext(TaskContext);
    const
        initialText = "",
        thereAreEditValues = () => {
            if (Object.keys(options.editValues).length > 0) {
                return true;
            } else {
                return false;
            }
        },
        [text, setText] = useState(initialText),
        handleOnChange = (e) => setText(e),
        handleSubmit = () => {
            if (text === "" || text === " " || text === undefined) {
                emptyValue();
            } else {
                if (thereAreEditValues()) {
                    updateData({ key: options.editValues.key, task: text });
                    setText(initialText);
                    changeInputText([]);
                } else {
                    createData(text);
                    setText(initialText);
                }
            }
        };

    useEffect(() => {
        setText(options.editValues.task);
    }, [options.editValues]);

    return (
        <div className="input-todo">
            <h2>Lista de actividades</h2>

            <div>
                <textarea
                    placeholder="Escribir tarea"
                    name="input_task"
                    type="text"
                    onChange={(e) => handleOnChange(e.target.value)}
                    value={text}
                />
                <button
                    onClick={() => handleSubmit()}
                    className="btn btn-primary"
                    type="button"
                >{thereAreEditValues() ? "Editar tarea" : "Agregar tarea"}</button>
            </div>
        </div>
    )
}

export default InputToDo;