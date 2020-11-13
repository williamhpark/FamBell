import React from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "../config/colors";
import LoginForm from "../components/LoginForm";

const LoginScreen = (props) => {
  return (
    <ImageBackground
      style={styles.background}
      imageStyle={{ opacity: 0.4 }}
      source={require("../assets/dinner-table.jpg")}
    >
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
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
