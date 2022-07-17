import { StyleSheet, Dimensions } from "react-native";

import { size, center } from "../../styles/mixins";

const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width =
  Dimensions.get("window").width / cols - marginHorizontal * (cols + 1) - 48;
const height = width;

export default StyleSheet.create({
  blockTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },

  container: {
    padding: 8,
    marginTop: 16,
  },

  imageContainer: {
    width: "100%",
    height: 300,
    marginBottom: 32,
  },

  image: {
    ...size("100%"),
    borderRadius: 8,
  },

  contentContainer: {
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },

  titleContainer: {
    padding: 16,
    marginBottom: 16,
    borderBottomColor: "#aaaaaa",
    borderBottomWidth: 1,
  },

  title: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  ingredientsContainer: {
    marginBottom: 24,
  },
  ingredientsTitle: {},
  ingredientsContent: {},
  ingredientItem: {
    fontSize: 16,
    padding: 8,
  },

  stepsContainer: {
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomColor: "#aaaaaa",
    borderBottomWidth: 1,
  },
  stepsTitle: {},
  stepsContent: {},
  stepsItem: {
    fontSize: 16,
    padding: 8,
  },
  stepMarker: {
    fontSize: 24,
  },

  labelsContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    ...center(),
    width: width,
    height: height,
    marginVertical: marginVertical * 2,
    marginHorizontal: marginHorizontal * 2,
    padding: 8,
    backgroundColor: "#E6B325",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
  },
  labelText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
