import React, { useState } from "react";
import {
  // Button,
  // Platform,
  // StatusBar,
  StyleSheet,
  // Text,
  View,
} from "react-native";
import { LoginScreen } from "./src/screens";

export default function App() {
  return <LoginScreen />;
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
