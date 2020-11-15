import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-community/picker";

const GroupSelect = () => {
  return (
    <View style={styles.dropdownContainer}>
      <Picker
        style={styles.dropdown}
        selectedValue={props.selected}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ selected: itemValue })
        }
      >
        <Picker.Item label="Select Group" value="" color="rgba(0, 0, 0, 0.6)" />
        {this.state.groups.map((group, index) => (
          <Picker.Item
            key={group.value}
            label={group.label}
            value={group.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
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
