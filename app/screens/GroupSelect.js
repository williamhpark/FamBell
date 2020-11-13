import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Picker } from "@react-native-community/picker";

class GroupSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [
        {
          label: "Group 1",
          value: "1",
        },
        {
          label: "Group 2",
          value: "2",
        },
        {
          label: "Group 3",
          value: "3",
        },
      ],
      selected: "",
    };
  }
  render() {
    return (
      <ImageBackground
        style={styles.background}
        imageStyle={{ opacity: 0.4 }}
        source={require("../assets/dinner-table.jpg")}
      >
        <Picker
          style={styles.dropdown}
          selectedValue={this.state.selected}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ selected: itemValue })
          }
        >
          <Picker.Item
            label="Select Group"
            value=""
            color="rgba(0, 0, 0, 0.6)"
          />
          {this.state.groups.map((group, index) => (
            <Picker.Item
              key={group.value}
              label={group.label}
              value={group.value}
            />
          ))}
        </Picker>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    width: "75%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
});

export default GroupSelect;
