import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Tag = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.tagContainer}>
        <Text style={styles.text}>{props.tagTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: "row",
    borderRadius: 23,
    borderColor: "darkgreen",
    borderWidth: 2,
    backgroundColor: "green",
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
    fontSize: 16,
  },
});

export default Tag;
