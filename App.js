import React from "react";
import { Text, View } from "react-native";

import LoginScreen from "./app/screens/LoginScreen";
import GroupSelect from "./app/screens/GroupSelect";
import TagsList from "./app/components/TagsList";

export default function App() {
  console.log("Starting app");
  return <TagsList />;
}
