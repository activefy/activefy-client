import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../const/Colors";

export default function ProfileScreen() {
  return (
    <ScrollView horizontal={false} style={styles.container}>
      <Text>Profile Screen</Text>
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
