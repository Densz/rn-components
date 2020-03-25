import React from "react";
import { View, TouchableOpacity, Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    color: "red"
  }
});

const Button = () => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        Button {Platform.OS === "ios" ? "ios" : "android"}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
