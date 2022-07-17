import { Text, View, Pressable } from "react-native";

import CategoryData from "../../data/models/category";

import getStyles from "./category.styles";

type CategoryProps = {
  data: CategoryData;
  onPress: (id: string) => void;
};
const Category = ({ data: { color, id, title }, onPress }: CategoryProps) => {
  const styles = getStyles(color);

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#cccccc" }}
        onPress={() => onPress(id)}
      >
        <View style={styles.inner}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Category;
