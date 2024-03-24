import React from "react";
import { StyleSheet, ScrollView } from 'react-native';

import Button from "@components/UI/Button";
import Title from "@components/UI/Title";

import useAsyncStorageCRUD from "@hooks/useAsyncStorageCRUD";

import ToDoCard from "components/ToDoCard";

export default function Home({ navigation }) {
    const { toDoList, toDoUpdate, toDoDelete } = useAsyncStorageCRUD();

    function handlePress() {
        navigation.navigate("ToDoCreate");
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Title>My to-do app</Title>
            {toDoList.map(({ title, description, checked }, index) => {
                function handleDelete() {
                    toDoDelete(index);
                }
                function handleCheckedChange() {
                    toDoUpdate(index, { title, description, checked: !checked });
                }
                return (
                    <ToDoCard
                        key={index}
                        title={title}
                        description={description}
                        checked={checked}
                        handleDelete={handleDelete}
                        handleCheckedChange={handleCheckedChange}
                    />
                );
            })};
            <Button onPress={handlePressw}>+ Add a to-do</Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
});
