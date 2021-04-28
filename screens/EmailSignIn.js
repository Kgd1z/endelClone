import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function EmailSignIn() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: 30,
          width: 30,
          position: "absolute",
          top: 30,
          right: 0,
        }}
        source={require("../assets/close.png")}
      />
      <Image
        style={{ top: 210, left: 4, width: 130, height: 120 }}
        source={require("../assets/circle.png")}
      />
      <Image
        style={{ top: 110, width: 90, height: 90, left: 6 }}
        source={require("../assets/head.png")}
      />
      <View style={{ top: 140 }}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            paddingBottom: 20,
          }}
        >
          Sign in with email
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            textAlign: "center",
            paddingBottom: 30,
          }}
        >
          Please enter your email to proceed
        </Text>
        <TextInput
          style={{
            width: 300,
            height: 34,

            paddingLeft: 5,
            borderBottomColor: "#343434",
            borderBottomWidth: 1,
          }}
          placeholder="Email"
          placeholderTextColor="#343434"
        />
      </View>

      <TouchableOpacity
        style={{
          borderColor: "white",
          borderWidth: 2,
          width: 300,
          height: 50,
          top: 340,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#343434" }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "black",
    alignItems: "center",
  },
});
