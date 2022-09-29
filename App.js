import React from "react";
//import { theme } from "./color";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./screens/Start";
import Main from "./screens/Main";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} options={{ headerShown:false}} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown:false}} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
} 