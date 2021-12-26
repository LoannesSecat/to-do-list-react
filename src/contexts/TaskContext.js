import { createContext, useState } from "react";
import Crud from "../storage/Crud";
import { toast } from 'react-toastify';

const taskContext = createContext();

const initialTasksList = Crud({ action: "read" });

const TaskProvider = ({ children }) => {
    const
        [tasks, setTasks] = useState(initialTasksList),
        [options, setOptions] = useState({
            editDisable: false,
            editValues: {}
        }),
        createData = value => {
            Crud({ action: "create", value: value });
            readData();
        },
        readData = () => setTasks(Crud({ action: "read" })),
        updateData = array => {
            Crud({ action: "update", value: array });
            readData();
        },
        deleteData = key => {
            Crud({ action: "delete", value: key });
            readData();
        },
        changeInputText = array => {
            setOptions({
                editDisable: !options.editDisable,
                editValues: array
            });
        },
        emptyValue = () => {
            toast.info("Por favor escribe una tarea", {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: false,
            });
        },

        data = {
            tasks,
            createData,
            /*     readData, */
            updateData,
            deleteData,
            options,
            changeInputText,
            emptyValue
        }

    return (
        <taskContext.Provider value={data}>
            {children}
        </taskContext.Provider>
    )
}

export { TaskProvider }
export default taskContext;