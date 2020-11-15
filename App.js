import React, { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";

import AddTag from "./src/components/AddTag";
import LoginScreen from "./src/screens/LoginScreen";
import GroupSelect from "./src/screens/GroupSelect";
import TagsList from "./src/components/TagsList";

const App = () => {
  console.log("Starting app");

  let idArr = [];
  const getRandomId = () => {
    let randomId = String(Math.floor(Math.random() * 100) + 1);
    while (idArr.includes(randomId)) {
      randomId = String(Math.floor(Math.random() * 100) + 1);
    }
    idArr.push(randomId);
    return randomId;
  };

  const [groups, setGroups] = useState([
    { label: "Group 1", value: "1" },
    { label: "Group 2", value: "2" },
    { label: "Group 3", value: "3" },
  ]);
  const [tags, setTags] = useState([
    { id: getRandomId(), title: "Breakfast", isSelected: false },
    { id: getRandomId(), title: "Lunch", isSelected: false },
    { id: getRandomId(), title: "Dinner", isSelected: false },
  ]);

  const toggleTag = (id) => {
    console.log(id);
    setTags(
      tags.map((tag) => {
        if (tag.id === id) {
          return { ...tag, isSelected: !tag.isSelected };
        }
      })
    );
    console.log(tags);
  };

  const addTag = (text) => {
    if (!text) {
      Alert.alert(
        "Error",
        "Please enter text",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: true }
      );
    } else {
      setTags((prevTags) => {
        return [
          ...prevTags,
          { id: getRandomId(), title: text, isSelected: false },
        ];
      });
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      imageStyle={{ opacity: 0.4 }}
      source={require("./src/assets/dinner-table.jpg")}
    >
      <AddTag addTag={addTag} />
      <TagsList tags={tags} toggleTag={toggleTag} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
