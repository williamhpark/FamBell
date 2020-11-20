import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import LoginForm from "../components/LoginForm";
import colors from "../config/colors";

const LoginScreen = (props) => {
  const { navigation } = props;

  return (
    <ImageBackground
      style={styles.background}
      imageStyle={{ opacity: 0.4 }}
      source={require("../assets/dinner-table.jpg")}
    >
      <View style={styles.logo}>
        <Image
          style={styles.logoImg}
          source={require("../assets/house-icon.png")}
        />
        <Text style={styles.logoText}>FamBell</Text>
      </View>
      <LoginForm navigation={navigation} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
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
