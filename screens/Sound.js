import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default function Sound() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
        Make the Most of Your Day
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 12,
          paddingTop: 13,
        }}
      >
        With the sound that adapts to the circadian rhythm
      </Text>

      <TouchableOpacity style={styles.button}>
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
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#767676",
    position: "absolute",
    bottom: 40,
    height: 45,
    width: 300,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
  },
});
