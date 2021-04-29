import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignOut2() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Image style={{ top: 140 }} source={require("../assets/monitor.png")} />
        <Image
          style={{ position: "absolute", top: 185, left: 90 }}
          source={require("../assets/tv.png")}
        />
        <Image
          style={{ position: "absolute", top: 190, left: 130 }}
          source={require("../assets/speak.png")}
        />
        <Image
          style={{ position: "absolute", top: 140, right: 84 }}
          source={require("../assets/woofer.png")}
        />
      </View>
      <View style={{ position: "absolute", top: 280, alignItems: "center" }}>
        <Text style={{ fontSize: 20, color: "white", paddingBottom: 20 }}>
          Endel Account
        </Text>
        <Text style={{ fontSize: 12, color: "white", paddingBottom: 20 }}>
          Free Trial expires in one week
        </Text>

        <Text style={{ fontSize: 12, color: "white", paddingBottom: 20 }}>
          Signed in with email gyebidee@gmail.com
        </Text>
        <Text style={{ fontSize: 12, color: "#343434", paddingBottom: 20 }}>
          User ID : 7404-1210-1290
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#343434",

            height: 48,
            width: 310,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
          }}
        >
          <Text style={{ color: "white" }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#343434",
          position: "absolute",
          bottom: 20,
          borderColor: "white",
          borderWidth: 2,
          height: 48,
          width: 310,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
        }}
        onPress={() => {
          navigation.navigate("Finish");
        }}
      >
        <Text style={{ color: "white" }}>Continue</Text>
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
