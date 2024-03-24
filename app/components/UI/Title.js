import React, { Children } from "react";
import { StyleSheet, Text } from 'react-native';

export default function Home({ children }) {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: { fontWeight: "600", fontSize: 32, marginBottom: 42 },
});
