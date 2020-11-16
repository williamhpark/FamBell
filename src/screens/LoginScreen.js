import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import LoginForm from "../components/LoginForm";

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.logoImg}
          source={require("../assets/house-icon.png")}
        />
        <Text style={styles.logoText}>FamBell</Text>
      </View>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
  logo: {
    position: "absolute",
    top: 80,
    alignSelf: "center",
  },
  logoImg: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  logoText: {
    color: colors.login.logoText,
    fontSize: 70,
  },
});

export default LoginScreen;
