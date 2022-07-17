import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

export const size = (size: string | number) =>
  StyleSheet.create({
    size: {
      width: size,
      height: size,
    },
  }).size;

export const center = () =>
  StyleSheet.create({
    center: {
      justifyContent: "center",
      alignContent: "center",
    },
  }).center;
