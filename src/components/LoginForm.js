import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import colors from "../config/colors";

const LoginForm = (props) => {
  const { navigation } = props;

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
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate("Groups")}
      >
        <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
  },
  btnText: {
    textAlign: "center",
    color: colors.login.btnText,
    fontWeight: "700",
  },
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: colors.login.inputBackground,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LoginForm;
