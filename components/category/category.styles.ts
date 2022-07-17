import { StyleSheet, Platform } from "react-native";

import { size, center } from "../../styles/mixins";

export default (color: string) =>
  StyleSheet.create({
    container: {
      ...size(150),
      overflow: Platform.OS === "android" ? "hidden" : "visible",
      borderRadius: 8,
      flex: 1,
      margin: 16,
      backgroundColor: color,
      elevation: 4,
      shadowColor: "black",
      shadowRadius: 8,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },

    inner: {
      ...center(),
      flex: 1,
      padding: 16,
    },

    button: {
      flex: 1,
    },

    buttonPressed: {
      opacity: 0.5,
    },

    title: {
      fontWeight: "bold",
      fontSize: 18,
      textAlign: "center",
    },
  });
