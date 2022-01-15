import { v4 as uuid } from "uuid";
import { toast } from 'react-toastify';
import { ThereAreData, SetItem, GetItem } from "../utils/LocalStorageHandler";

const Crud = ({ action, value }) => {
    let list = [];
    const notify = msg => {
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
                if (!ThereAreData()) {
                    SetItem({ data: [{ key: uuid(), task: value }] });
                } else {
                    list.push(...GetItem(), { key: uuid(), task: value });
                    SetItem({ data: list });
                }

                notify("Tarea agregada");
                break;
            case "read":
                return !ThereAreData() ? list : GetItem();

            case "update":
                list = GetItem().map(e => e.key === value.key ? { key: e.key, task: value.task } : e);
                SetItem({ data: list });

                notify("Tarea actualizada");
                break;
            case "delete":
                list = GetItem();
                SetItem({ data: list.filter(e => e.key !== value) });

                notify("Tarea realizada");
                break;

            default:
                console.log("Hola")
                break;

        }
    } catch (err) {
        console.error("CRUD error: ", err);
    }
}

export default Crud;