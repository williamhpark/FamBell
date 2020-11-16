import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

const Tag = (props) => {
  const makeStyles = () => {
    if (props.tag.isSelected) {
      return {
        borderRadius: 23,
        borderColor: colors.tag.border,
        borderWidth: 2,
        backgroundColor: colors.tag.selected,
        height: 46,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 16,
        paddingRight: 16,
      };
    } else {
      return {
        borderRadius: 23,
        borderColor: colors.tag.border,
        borderWidth: 2,
        backgroundColor: colors.tag.unselected,
        height: 46,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 16,
        paddingRight: 16,
      };
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.toggleTag(props.tag.id)}
    >
      <View style={makeStyles()}>
        {!props.tag.isSelected && (
          <Ionicons
            style={{ color: colors.tag.iconText, marginRight: 3 }}
            name="md-add"
            size={20}
          />
        )}
        {props.tag.isSelected && (
          <Ionicons
            style={{ color: colors.tag.iconText, marginRight: 3 }}
            name="md-remove"
            size={20}
          />
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
  text: {
    fontSize: 18,
    textAlign: "center",
    color: colors.tag.text,
  },
});

export default Tag;
