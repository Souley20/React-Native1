import React from "react"; 7.4K(gzipped: 3K)
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; Calculating...

import Home from "@screens/Home";
import ToDoCreate from "@screens/ToDoCreate";

export default function Navigation() {
    const RootStack = createStackNavigator();
    return <NavigationContainer>
        <RootStack.Navigator mode="modal">
            <RootStack.Screen
                name="Home"
                component={Home}
                option={{ headerShown: false }}
            />
            <RootStack.Screen name="ToDoCreate" component={ToDoCreate} option={{ headerShown }} />
        </RootStack.Navigator>
    </NavigationContainer>;
}
