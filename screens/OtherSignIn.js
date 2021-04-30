import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function OtherSignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <Image
          style={{
            height: 30,
            width: 30,
            position: "absolute",
            top: 30,
            left: 130,
          }}
          source={require("../assets/close.png")}
        />
      </TouchableOpacity>

      <Image
        style={{ height: 200, width: 200, position: "absolute", top: 120 }}
        source={require("../assets/desktop3.png")}
      />
      <View style={{ top: 310, width: 340 }}>
        <Text
          style={{
            color: "white",
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
            paddingBottom: 20,
          }}
        >
          Endel Account
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          With Endel account you can enjoy your subscription on multiple devices
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          position: "absolute",
          bottom: 280,
          height: 48,
          width: 310,
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
          bottom: 230,
          height: 48,
          width: 310,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
        }}
      >
        <Text style={{ color: "white" }}>Sign in with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#343434",
          position: "absolute",
          bottom: 180,
          height: 48,
          width: 310,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
        }}
        onPress={() => {
          navigation.navigate("EmailSignIn");
        }}
      >
        <Text style={{ color: "white" }}>Sign in with Email</Text>
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
