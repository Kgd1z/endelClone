import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 200, width: 200, position: "absolute", top: 60 }}
        source={require("../assets/desktop3.png")}
      />

      <Text
        style={{
          color: "white",
          fontSize: 17,
          fontWeight: "bold",
          position: "absolute",
          top: 245,
        }}
      >
        Sign In or Register
      </Text>
      <View
        style={{
          width: 280,
          top: 285,
        }}
      >
        <Text
          style={{
            fontSize: 11,
            color: "white",
            textAlign: "center",
          }}
        >
          Create an account to used endell on an unlimited number of devices
        </Text>
        <Text
          style={{
            fontSize: 11,
            color: "white",
            textAlign: "center",
            paddingTop: 13,
          }}
        >
          Mobile · Desktop · Wearable · Voice
        </Text>
        <Text
          style={{
            fontSize: 11,
            color: "#767676",
            textAlign: "center",
            paddingTop: 13,
          }}
        >
          User ID : 7404-1233-4546
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          position: "absolute",
          bottom: 300,
          height: 48,
          width: 280,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image
            style={{ height: 15, width: 15, marginRight: 4, marginTop: 3 }}
            source={require("../assets/apple.png")}
          />
          <Text
            style={{
              color: "black",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Sign in with Apple
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#343434",
          position: "absolute",
          bottom: 250,
          height: 48,
          width: 280,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
        }}
      >
        <Text style={{ color: "white" }}>Other Sign-in Options</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#343434",
          position: "absolute",
          bottom: 40,

          height: 45,
          width: 300,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
        }}
      >
        <Text style={{ color: "white" }}>Later</Text>
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
