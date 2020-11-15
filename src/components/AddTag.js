import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddItem = (props) => {
  const [text, setText] = useState("");

  const onChange = (textValue) => setText(textValue);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Tag..."
          placeholderTextColor="black"
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
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
    marginLeft: 5,
  },
  container: {
    width: "100%",
    marginBottom: 5,
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  inputContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
});

export default AddItem;
