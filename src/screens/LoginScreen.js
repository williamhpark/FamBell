import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import LoginForm from "../components/LoginForm";

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/house-icon.png")}
        />
        <Text style={styles.logoText}>FamBell</Text>
      </View>
      <View style={styles.formContainer}>
        <LoginForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: "black",
    fontSize: 70,
    textAlign: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
});

export default LoginScreen;
