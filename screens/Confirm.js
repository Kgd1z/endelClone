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

export default function Confirm() {
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
            left: 140,
            top: 30,
          }}
          source={require("../assets/close.png")}
        />
      </TouchableOpacity>

      <View
        style={{ top: 230, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          style={{ width: 110, height: 110, position: "absolute" }}
          source={require("../assets/circle.png")}
        />
        <Image
          style={{ width: 70, height: 70 }}
          source={require("../assets/email.png")}
        />
      </View>
      <View
        style={{
          top: 270,
          width: 330,

          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "center",
            paddingBottom: 20,
          }}
        >
          Confirm Your Email
        </Text>
        <Text
          style={{
            color: "#F9FAFB",
            fontSize: 12,
            textAlign: "center",
            paddingBottom: 20,
          }}
        >
          Check your inbox - tap the magic link or paste sign-in code from the
          mail
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
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#343434",
            position: "absolute",
            top: 420,
            height: 48,
            width: 310,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
          }}
        >
          <Text style={{ color: "white" }}>Resend Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: "white",
            borderWidth: 2,
            width: 310,
            height: 48,
            top: 480,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("SignOut");
          }}
        >
          <Text style={{ color: "#343434" }}>Confirm</Text>
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
