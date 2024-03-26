import * as React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ToastManager, { Toast } from "toastify-react-native";
import ButtonAbsolute from "./src/components/ButtonAbsolute";
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      {/* <ButtonAbsolute /> */}
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
        <ToastManager />
        <TouchableOpacity
          onPress={() => Toast.success("Promised is resolved")}
          style={styles.buttonStyle}
        >
          <Text>SHOW SOME AWESOMENESS!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// const Stack = createNativeStackNavigator();
const Stack = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <LoginScreen /> */}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "Details",
            tabBarLabel: "Updates",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{ title: "Login page" }}
          options={{
            tabBarLabel: "profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
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
  buttonStyle: {
    marginTop: 10,
    backgroundColor: "white",
    borderColor: "green",
    borderWidth: 2,
    padding: 10,
  },
});
