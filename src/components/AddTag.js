import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

const AddItem = (props) => {
  const [text, setText] = useState("");

  const onChange = (textValue) => setText(textValue);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Tag..."
          placeholderTextColor={colors.addTag.placeholder}
          value={text}
          onChangeText={onChange}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          props.addTag(text);
          setText("");
        }}
      >
        <Ionicons name="md-add" size={20} />
        <Text style={styles.btnText}>Add Tag</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.addTag.btnBackground,
    padding: 9,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btnText: {
    color: colors.addTag.btnText,
    fontSize: 20,
    textAlign: "center",
    marginLeft: 5,
  },
  container: {
    marginBottom: 5,
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  inputContainer: {
    backgroundColor: colors.addTag.inputContainer,
  },
});

export default AddItem;
