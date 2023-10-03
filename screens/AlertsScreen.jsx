import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../const/Colors";

export default function AlertsScreen() {
  return (
    <ScrollView horizontal={false} style={styles.container}>
      <Text>Alerts Screen</Text>
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
