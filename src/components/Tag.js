import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tag = (props) => {
  let tagContainer;
  props.tag.isSelected
    ? (tagContainer = styles.selectedTagContainer)
    : (tagContainer = styles.deselectedTagContainer);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.toggleTag(props.tag.id)}
    >
      <View style={styles.selectedTagContainer}>
        {!props.tag.isSelected && (
          <Ionicons style={{ marginRight: 3 }} name="md-add" size={20} />
        )}
        {props.tag.isSelected && (
          <Ionicons style={{ marginRight: 3 }} name="md-remove" size={20} />
        )}
        <Text style={styles.text}>{props.tag.title}</Text>
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
  deselectedTagContainer: {
    borderRadius: 23,
    borderColor: "darkgreen",
    borderWidth: 2,
    backgroundColor: "yellowgreen",
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  selectedTagContainer: {
    borderRadius: 23,
    borderColor: "darkgreen",
    borderWidth: 2,
    backgroundColor: "darkgreen",
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
  },
});

export default Tag;
