import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SpecialOffer() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View style={{ alignItems: "center", paddingBottom: 60 }}>
          <Text style={{ color: "white", fontSize: 20 }}>
            Your Special Offer{" "}
          </Text>
          <Text style={{ color: "white", fontSize: 12 }}>
            Tap for other options
          </Text>
        </View>

        <Image source={require("../assets/splash.png")} />
        <View style={{ alignItems: "center", width: 180 }}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              paddingTop: 30,
              textAlign: "center",
            }}
          >
            'App of the day' in 138 countries
          </Text>
        </View>
        <View style={{ width: 230 }}>
          <Text
            style={{
              color: "white",

              paddingTop: 30,
              textAlign: "center",
            }}
          >
            Over two million happy users - you are next!
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", paddingTop: 90 }}>
          <TouchableOpacity>
            <View
              style={{
                width: 130,
                height: 42,
                borderRadius: 12,
                backgroundColor: "#343434",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 7,
              }}
            >
              <Text style={{ color: "white" }}>Help</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                width: 130,
                height: 42,
                borderRadius: 12,
                backgroundColor: "#343434",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }}>Restore</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: "white",
            padding: 10,
            textAlign: "center",
            fontSize: 9,
          }}
        >
          Try one week free trial.Then $29.99 per one year
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#343434",

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
            navigation.navigate("SpecialOffer");
          }}
        >
          <Text style={{ color: "white" }}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ width: 310, alignItems: "center", justifyContent: "center" }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 10,
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          The subscription will continue unless cancelled in setting at least
          one day before the subscription period ends.You can manage your
          subscription and turn off auto renewal in your iTunes account settings
          .Payment will be charged to your itunes account at confirmation of
          purchase.Any unused portion of a free trial period will be forfeited
          when subscribing to a non trial plan
        </Text>
      </View>
      <TouchableOpacity>
        <View
          style={{
            width: 310,
            height: 42,
            borderRadius: 12,
            backgroundColor: "#343434",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>Privacy Policy</Text>
        </View>
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
