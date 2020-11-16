import React, { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";

import LoginScreen from "./src/screens/LoginScreen";
import GroupSelect from "./src/screens/GroupSelect";
import TagsSelect from "./src/screens/TagsSelect";

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

  const toggleTag = (id) => {
    let tagsArr = [...tags];
    tags.map((tag, i) => {
      if (tag.id == id) {
        tagsArr[i] = { id, title: tag.title, isSelected: !tag.isSelected };
      }
    });
    setTags(tagsArr);
  };

  return (
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      imageStyle={{ opacity: 0.4 }}
      source={require("./src/assets/dinner-table.jpg")}
    >
      {/* <LoginScreen /> */}
      {/* <GroupSelect groups={groups} /> */}
      {/* <TagsSelect tags={tags} toggleTag={toggleTag} addTag={addTag} /> */}
    </ImageBackground>
  );
};

export default App;
