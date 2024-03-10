import * as React from "react";
import { View, Text, Button } from "react-native";
import {
  // Button,
  // Platform,
  // StatusBar,
  StyleSheet,
  // Text,
} from "react-native";
import { LoginScreen } from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
        <Button
          title="Go to Login page"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Details Screen</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          marginTop: 20,
          flexWrap: "wrap",
        }}
      >
        <Button
          title="Go to Details... again"
          // onPress={() => navigation.navigate("Details")}
          onPress={() => navigation.push("Details")}
        />
        <Button
          title="Go to Login page"
          onPress={() => navigation.navigate("Login")}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <LoginScreen /> */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Details" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    // padding: 20,
    // margin: 10,
  },
  top: {
    flex: 1,
    backgroundColor: "yellow",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
