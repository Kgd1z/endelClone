import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Finish() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ top: 70, alignItems: "center", width: 320 }}>
        <Image
          style={{ width: 120, height: 120 }}
          source={require("../assets/circle.png")}
        />
        <Image
          style={{ width: 76, height: 76, position: "absolute", top: 24 }}
          source={require("../assets/card.png")}
        />
        <Text style={{ color: "white", fontSize: 20, paddingTop: 20 }}>
          Now You Have an Account
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            paddingTop: 20,
            textAlign: "center",
            paddingBottom: 30,
          }}
        >
          It enables endel on an unlimited number of devices. The last step -
          Introduce yourself:
        </Text>
        <TextInput
          style={{
            width: 310,
            height: 34,

            paddingLeft: 5,
            borderBottomColor: "#343434",
            borderBottomWidth: 1,
          }}
          placeholder="Code"
          placeholderTextColor="#343434"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#343434",
            marginTop: 20,
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
          <Text style={{ color: "white" }}>Finish</Text>
        </TouchableOpacity>
      </View>
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
