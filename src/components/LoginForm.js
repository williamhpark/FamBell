import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginForm = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        returnKeyType="next"
        onSubmitEditing={() => passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        returnKeyType="go"
        ref={(input) => (passwordInput = input)}
      />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#afdac1",
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontWeight: "700",
  },
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginBottom: 20,
    color: "black",
    paddingHorizontal: 10,
  },
});

export default LoginForm;
