import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import Input from "@components/UI/Input";
import Button from "@components/UI/Button";
import Title from "@components/UI/Title";

import useNewToDOManage from "@hooks/useNewToDoManage";

export default function ToDoCreate({ navigation }) {
    const { fieldsTab, handleSubmit } = useNewToDOManage();

    function handlePress() {
        navigation.navigate("Home");
    }
    return (
        <View style={styles.container}>
            <Title>Add a new task</Title>
            {fieldsTab.map((value, onChange, placeholder) => {
                return (
                    <Input
                        key={placeholder}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                );
            })}
            <Button onPress={handleSubmit}>To-do add</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f3e9',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
});
