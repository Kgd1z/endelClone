import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Notifications() {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 10,
          height: 80,
          width: 250,
          padding: 9,
        }}
      >
        <Text style={{ color: "#6B7280", paddingBottom: 2, fontSize: 10 }}>
          Endel
        </Text>
        <Text
          style={{
            color: "#6B7280",
            paddingBottom: 2,
            position: "absolute",
            fontSize: 10,
            top: 7,
            right: 6,
          }}
        >
          Now
        </Text>
        <Text style={{ color: "white", paddingBottom: 2, fontWeight: "bold" }}>
          Its Morning Energy Pack
        </Text>
        <Text style={{ color: "#6B7280", paddingBottom: 2, fontSize: 10 }}>
          Try to take a deep breath and make it happen
        </Text>
        <Text style={{ color: "#6B7280", paddingBottom: 2, fontSize: 10 }}>
          Try Focus
        </Text>
      </View>
      <Text style={{ color: "white", paddingTop: 35, fontWeight: "bold" }}>
        Get Useful Notifications
      </Text>
      <Text style={{ color: "white", paddingTop: 20, fontSize: 11 }}>
        Endel will send you insights and wellness tips
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#343434",
          position: "absolute",
          bottom: 110,
          height: 45,
          width: 300,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
        }}
      >
        <Text style={{ color: "white" }}>Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#343434",
          position: "absolute",
          bottom: 60,
          height: 45,
          width: 300,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
          borderColor: "white",
        }}
      >
        <Text style={{ color: "white" }}>Allow Notifications</Text>
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
    justifyContent: "center",
  },
});
