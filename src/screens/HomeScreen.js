// src/screens/HomeScreen.js
import React from "react";
import {
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.replace("SignIn");
  };

  const { width } = Dimensions.get("window");

  return (
    <ScrollView style={[styles.container, { overflow: "auto" }]}>
      <Image
        source={require("../../assets/welcome_image.png")} // Add an appropriate welcome image in your assets
        style={{
          width: width,
          height: 200,
          resizeMode: "contain",
        }}
      />
      <Text style={styles.welcomeText}>Welcome to the App!</Text>
      <Text style={styles.subText}>We are glad to have you here.</Text>
      <Button title="Logout" onPress={handleLogout} style={styles.button} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light gray background
    height: "100vh",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
