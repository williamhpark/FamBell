import React, { useState } from "react";
import { Alert, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import LoginScreen from "./src/screens/LoginScreen";
import GroupSelect from "./src/screens/GroupSelect";
import TagsSelect from "./src/screens/TagsSelect";

const App = () => {
  console.log("Starting app");

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login Screen", headerShown: false }}
        />
        <Stack.Screen
          name="Groups"
          component={GroupSelect}
          options={{ title: "Group Select", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Tags"
          component={TagsSelect}
          options={{ title: "Tags Select", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
