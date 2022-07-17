import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginBottom: 16,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,

    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 4,
  },

  innerPressed: {
    opacity: 0.75,
  },

  image: {
    width: "100%",
    height: 200,
  },

  textContainer: {
    padding: 16,
  },

  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 16,
  },

  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
