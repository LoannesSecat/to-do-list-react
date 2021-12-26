import React, { Fragment, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import taskContext from "../contexts/TaskContext";

const InputToDo = () => {
    const { createData, options, updateData, changeInputText, emptyValue } = useContext(taskContext);
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
                emptyValue()
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
        <Fragment>
            <div className="row mb-5">
                <textarea
                    placeholder="Tarea"
                    name="input_task"
                    type="text"
                    className="col-9 me-5"
                    onChange={(e) => handleOnChange(e.target.value)}
                    value={text}
                />
                <button
                    onClick={() => handleSubmit()}
                    className="col btn btn-primary"
                    type="button"
                >{thereAreEditValues() ? "Editar tarea" : "Agregar tarea"}</button>
            </div>
        </Fragment>
    )
}

export default InputToDo;