import React from "react";
import {
  View,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text
} from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red"
  }
});

const Button = () => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text>Button {Platform.OS === "ios" ? "ios" : "android"}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
