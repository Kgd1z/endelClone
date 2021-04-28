import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Sound from "./screens/Sound";
import Notifications from "./screens/Notifications";
import SignIn from "./screens/SignIn";
import OtherSignIn from "./screens/OtherSignIn";
import EmailSignIn from "./screens/EmailSignIn";
import Confirm from "./screens/Confirm";
import SignOut from "./screens/SignOut";
import Finish from "./screens/Finish";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <Sound /> */}
        {/* <Notifications /> */}
        {/* <SignIn /> */}
        {/* <OtherSignIn /> */}
        {/* <EmailSignIn /> */}
        {/* <Confirm /> */}
        {/* <SignOut /> */}
        <Finish />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
