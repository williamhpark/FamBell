import React from "react";
import { StyleSheet, View } from "react-native";

import Tag from "./Tag";

const TagsList = (props) => {
  return (
    <View style={styles.tagsContainer}>
      {props.tags.map((tag, index) => (
        <Tag key={index} tag={tag} toggleTag={props.toggleTag} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default TagsList;
