import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../const/Colors";

export default function MessagesScreen() {
  return (
    <ScrollView horizontal={false} style={styles.container}>
      <Text>Messages Screen</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "scroll",
    height: "auto",
    backgroundColor: COLORS.screen_background,
  },
});
