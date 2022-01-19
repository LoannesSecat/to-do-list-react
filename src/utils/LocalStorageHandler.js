const nameList = "list";

const ChangeName = name => {
    return name === undefined ? nameList : name;
}

export const ThereAreData = (name) => {
    if (localStorage.getItem(ChangeName(name)) === null) {
        return false
    } else {
        return true;
    }
}

export const SetItem = ({ name, data }) => localStorage.setItem(ChangeName(name), JSON.stringify(data));

export const GetItem = (name) => {
    return JSON.parse(localStorage.getItem(ChangeName(name)));
}

export const RemoveItem = (name) => localStorage.removeItem(name);