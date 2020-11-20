import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AddTag from "../components/AddTag";
import Tag from "../components/Tag";
import colors from "../config/colors";

const TagsSelect = (props) => {
  let idArr = [];
  const getRandomId = () => {
    let randomId = String(Math.floor(Math.random() * 100) + 1);
    while (idArr.includes(randomId)) {
      randomId = String(Math.floor(Math.random() * 100) + 1);
    }
    idArr.push(randomId);
    return randomId;
  };

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
      style={styles.background}
      imageStyle={{ opacity: 0.4 }}
      source={require("../assets/dinner-table.jpg")}
    >
      <AddTag addTag={addTag} />
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} toggleTag={toggleTag} />
        ))}
      </View>
      <TouchableOpacity style={styles.sendBtnContainer}>
        <Text style={styles.sendBtnText}>SEND</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  sendBtnContainer: {
    backgroundColor: colors.primary,
    padding: 15,
    width: 70,
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
  },
  sendBtnText: {
    color: colors.nextBtnText,
    fontWeight: "700",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default TagsSelect;
