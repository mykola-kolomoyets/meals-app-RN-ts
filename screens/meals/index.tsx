import { View, Text, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MEALS } from "../../data";

import { Screens } from "../../utils/enums/navigation";

import { RootStackParamList } from "../../utils/types/navigation";

import styles from "./meal.styles";

const MealsScreen = ({
  route: {
    params: { id },
  },
}: NativeStackScreenProps<RootStackParamList, Screens.meals>) => {
  const mealsByCategory = MEALS.filter((meal) => meal.categories.includes(id));

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsByCategory}
        renderItem={(meal) => <Text>{meal.item.title}</Text>}
        keyExtractor={(meal) => meal.id}
      />
    </View>
  );
};

export default MealsScreen;
