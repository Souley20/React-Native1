import React, { Children } from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Home({ children, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#007AFF",
        borderRadius: 14,
        wwidth: "100%",
        alignItems: "center",
        marginTop: 32,
    },
    title: { color: "white", margin: 17, fontSize: 17, fontWeight: "600" },
});
