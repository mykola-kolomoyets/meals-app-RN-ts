import { View, Text, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MEALS } from "../../data";

import { Screens } from "../../utils/enums/navigation";

import { RootStackParamList } from "../../utils/types/navigation";

import styles from "./meal.styles";
import MealCard from "../../components/meal-card";

const MealsScreen = ({
  route: {
    params: { id },
  },
  navigation,
}: NativeStackScreenProps<RootStackParamList, Screens.meals>) => {
  const mealsByCategory = MEALS.filter((meal) => meal.categories.includes(id));

  const onMealPress = (mealId: string) =>
    navigation.navigate(Screens.mealDetails, { id: mealId, category: id });

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsByCategory}
        renderItem={(meal) => (
          <MealCard data={meal.item} onPress={onMealPress} />
        )}
        keyExtractor={(meal) => meal.id}
      />
    </View>
  );
};

export default MealsScreen;
