import { StyleSheet, Text, View } from "react-native";
import AppProvider from "../src/providers/apollo";
import SignIn from "../src/screens/SignIn";
import HomeScreen from "../src/screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function Page() {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
