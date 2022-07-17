import { View, Text, Image, Pressable } from "react-native";

import Meal from "../../data/models/meal";
import MealDetail from "../meal-detail";

import styles from "./meal.styles";

type MealCardProps = {
  data: Meal;
  onPress: (id: string) => void;
};
const MealCard = ({
  data: { id, imageUrl, title, affordability, complexity, duration },
  onPress,
}: MealCardProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.innerPressed : null)}
        android_ripple={{ color: "#cccccc" }}
        onPress={() => onPress(id)}
      >
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />

          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>

            <MealDetail {...{ duration, complexity, affordability }} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealCard;
