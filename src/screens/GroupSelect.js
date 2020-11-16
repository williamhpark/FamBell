import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Picker } from "@react-native-community/picker";

import colors from "../config/colors";

const GroupSelect = (props) => {
  const [selectedValue, setSelectedValue] = useState("Select Group");

  return (
    <View style={styles.container}>
      <Picker
        style={styles.dropdown}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item
          label="Select Group"
          value=""
          color={colors.groups.defaultText}
        />
        {props.groups.map((group) => (
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    width: "75%",
    backgroundColor: colors.groups.backgroundColor,
  },
});

export default GroupSelect;
