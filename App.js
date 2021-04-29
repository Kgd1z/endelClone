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
import SignOut2 from "./screens/SignOut2";
import Finish from "./screens/Finish";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="OtherSignIn" component={OtherSignIn} />
            <Stack.Screen name="EmailSignIn" component={EmailSignIn} />
            <Stack.Screen name="Confirm" component={Confirm} />
            <Stack.Screen name="SignOut" component={SignOut} />
            <Stack.Screen name="Finish" component={Finish} />
            <Stack.Screen name="Sound" component={Sound} />
            <Stack.Screen name="SignOut2" component={SignOut2} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <Sound /> */}
        {/* <Notifications /> */}
        {/* <SignIn /> */}
        {/* <OtherSignIn /> */}
        {/* <EmailSignIn /> */}
        {/* <Confirm /> */}
        {/* <SignOut /> */}
        {/* <Finish /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "black",
    // alignItems: "center",
    justifyContent: "center",
  },
});
