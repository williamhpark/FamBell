import React, { Component } from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";

import Tag from "./Tag";

class TagsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ["Test 1", "Test 2", "Test 3"],
    };
  }
  render() {
    return (
      <ImageBackground
        style={styles.background}
        imageStyle={{ opacity: 0.4 }}
        source={require("../assets/dinner-table.jpg")}
      >
        <View style={styles.tagsContainer}>
          <Tag tagTitle="testtttttttttt" />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  tagsContainer: {
    justifyContent: "center",
  },
});

export default TagsList;
