import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-community/picker";

import colors from "../config/colors";

const GroupSelect = (props) => {
  const { navigation } = props;

  const [groups, setGroups] = useState([
    { label: "Group 1", value: "1" },
    { label: "Group 2", value: "2" },
    { label: "Group 3", value: "3" },
  ]);
  const [selectedValue, setSelectedValue] = useState("Select Group");

  return (
    <ImageBackground
      style={styles.background}
      imageStyle={{ opacity: 0.4 }}
      source={require("../assets/dinner-table.jpg")}
    >
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
        {groups.map((group) => (
          <Picker.Item
            key={group.value}
            label={group.label}
            value={group.value}
          />
        ))}
      </Picker>
      <TouchableOpacity
        style={styles.nextBtnContainer}
        onPress={() => navigation.navigate("Tags")}
      >
        <Text style={styles.nextBtnText}>NEXT</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    width: "75%",
    backgroundColor: colors.groups.backgroundColor,
    marginBottom: 40,
  },
  nextBtnContainer: {
    backgroundColor: colors.primary,
    padding: 15,
    width: 70,
    height: 40,
    justifyContent: "center",
  },
  nextBtnText: {
    textAlign: "center",
    color: colors.nextBtnText,
    fontWeight: "700",
  },
});

export default GroupSelect;
