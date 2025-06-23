import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initDatabase } from "./src/database/db";
import CreateClientScreen from "./src/features/clients/screens/CreateClientScreen";
import ClientListScreen from "./src/features/clients/screens/ClientListScreen";


const Stack = createNativeStackNavigator();


export default function App() {
  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Clientes" component={ClientListScreen} />
        <Stack.Screen name="Nuevo Cliente" component={CreateClientScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}