import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const getFullName = (fn, mn, ln) => {
  return fn + " " + mn + " " + ln;
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Try editing me! 🎉</Text>
      <StatusBar style="auto" />
      <ScrollView>
        <Text>Hey</Text>
        <View>
          <Text>More Hey</Text>
          <Image
            source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <TextInput
          style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
          defaultValue="hey input"
        />
        <Text> Hello I am {getFullName("Anamul", "Haque", "Shanto")}</Text>
        {/* qustion react import carai kaj korlo kintu docs a to bola react import na korle kaj korbe nah jemon https://reactnative.dev/docs/intro-react */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
