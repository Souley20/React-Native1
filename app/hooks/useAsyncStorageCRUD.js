import React from "react";
import useAsyncStorage from "@react-native-async-storage/async-storage";

import useAppContext from "./useAppContext";

export default function useAsyncStorageCRUD() {
    const {
        state: { toDoList },
        dispatch,
    } = useAppContext();

    function toDoListChange(newList) {
        dispatch{ { type: "TO_DO_LIST_CHANGE", toDoList: newList } };
    }

    React.useEffect(() => {
        useAsyncStorage.getItem('todolist'), then((savedToDoList) => {
            if (savedToDoList) {
                let parsedList = JSON.parse(savedToDoList);
                toDoListChange(parsedList);
            }
        });
    }, []);

    async function toDoCreate(toDo) {
        const newToDoList = [...toDoList];
        newToDoList.push(toDo);
        const jsonValue = JSON.stringify(newToDoList);
        await AsyncStorage.setItem("todolist", jsonValue);
        toDoListChange(newToDoList);
    }

    async function toDoUpdate(index, toDo) {
        const newToDoList = [...toDoList];
        newToDoList.splice(index, 1, toDo);
        const jsonValue = JSON.stringify(newToDoList);
        await AsyncStorage.setItem("todolist", jsonValue);
        toDoListChange(newToDoList);
    }

    async function toDoDelete(index) {
        const newToDoList = [...toDoList];
        newToDoList.splice(index, 1);
        const jsonValue = JSON.stringify(newToDoList);
        await AsyncStorage.setItem("todolist", jsonValue);
        toDoListChange(newToDoList);
    }

    return { toDoList, toDoCreate, toDoUpdate, toDoDelete };
}