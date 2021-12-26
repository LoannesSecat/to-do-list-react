import { v4 as uuid } from "uuid";
import { toast } from 'react-toastify';

const Crud = ({ action, value }) => {
    let list = [];
    const nameList = "list",
        notify = msg => {
            toast.success(msg, {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: false,
            });
        };

    try {
        switch (action) {
            case "create":
                if (localStorage.getItem(nameList) === null) {
                    localStorage.setItem(nameList, JSON.stringify([{ key: uuid(), task: value }]));
                } else {
                    list.push(...JSON.parse(localStorage.getItem(nameList)), { key: uuid(), task: value });
                    localStorage.setItem(nameList, JSON.stringify(list));
                }

                notify("Tarea agregada");
                break;
            case "read":
                if (localStorage.getItem(nameList) === null) {
                    return list;
                } else {
                    return JSON.parse(localStorage.getItem(nameList));
                }
            case "update":
                list = JSON.parse(localStorage.getItem(nameList));
                list.map(e => e.key === value.key ? e.task = value.task : e.task);
                localStorage.setItem(nameList, JSON.stringify(list));

                notify("Tarea actualizada");
                break;
            case "delete":
                list = JSON.parse(localStorage.getItem(nameList));
                list = list.filter(e => e.key !== value);
                localStorage.setItem(nameList, JSON.stringify(list));

                notify("Tarea realizada");
                break;

            default:
                break;

        }
    } catch (err) {
        console.error(err);
    }
}

export default Crud;