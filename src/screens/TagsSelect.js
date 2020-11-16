import React from "react";
import { StyleSheet, View } from "react-native";

import AddTag from "../components/AddTag";
import Tag from "../components/Tag";

const TagsSelect = (props) => {
  return (
    <View style={styles.container}>
      <AddTag style={styles.addTag} addTag={props.addTag} />
      <View style={styles.tagsContainer}>
        {props.tags.map((tag, index) => (
          <Tag key={index} tag={tag} toggleTag={props.toggleTag} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    justifyContent: "center",
  },
});

export default TagsSelect;
