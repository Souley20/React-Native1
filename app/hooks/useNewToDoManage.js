import React from "react";

import useAsyncStorageCRUD from "./useAsyncStorageCRUD";

export default function useNewToDOManage() {
    const [title, titleChange] = React.useState("");
    const [description, descriptionChange] = React.useState("");

    const { toDoCreate } = useAsyncStorageCRUD();

    const fieldsTab = [
        {
            value: title,
            onChange: (e) => titleChange(e),
            placeholder: "Name of the task to do",
        },
        {
            value: description,
            onChange: (e) => titleChange(e),
            placeholder: "Description (option)",
        },
    ];

    async function handleSubmit() {
        if (title.length == 0) {
            return alert("The task requires a title")
        }
        await toDoCreate({ title, description, checked: false });
        titleChange("");
        descriptionChange("");
    }

    return { fieldsTab, handleSubmit };
}
