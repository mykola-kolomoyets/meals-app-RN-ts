import { View, Text, Image, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import {useAppDispatch, useAppSelector} from "../../store/redux";
import {addFavourite, removeFavourite} from "../../store/redux/slices/favourites";

import MealDetail from "../../components/meal-detail";

import { MEALS } from "../../data";

import { Screens } from "../../utils/enums/navigation";
import { RootStackParamList } from "../../utils/types/navigation";

import styles from "./meal-details.styles";
import IconButton from "../../components/icon-button";

const MealDetailsScreen = ({
  navigation,
  route: {
    params: { id },
  },
}: NativeStackScreenProps<RootStackParamList, Screens.mealDetails>) => {
  const favouriteMeals = useAppSelector(state => state.favourites.ids);
  const dispatch = useAppDispatch();
  
  const isMealFavourite = favouriteMeals.includes(id);
  
  const {
    affordability,
    complexity,
    duration,
    imageUrl,
    ingredients,
    isGlutenFree,
    isLactoseFree,
    isVegan,
    isVegetarian,
    steps,
    title,
  } = MEALS.find((meal) => meal.id === id)!;

  const mealLabelsData = [
    {
      label: "Gluten Free",
      visible: isGlutenFree,
    },
    {
      label: "Lactose Free",
      visible: isLactoseFree,
    },
    {
      label: "For Vegans",
      visible: isVegan,
    },
    {
      label: "For Vegetarians",
      visible: isVegetarian,
    },
  ].filter((item) => item.visible);
  
  const onFavouriteTogglePress = () => {
    dispatch(isMealFavourite ? removeFavourite({id}) : addFavourite({id}));
  }
  
  navigation.setOptions({
    headerRight: () => (
      <IconButton icon={isMealFavourite ? 'star' : 'star-outline'} color='white' onPress={onFavouriteTogglePress} />
    )
  })

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>

          <MealDetail {...{ duration, affordability, complexity }} />
        </View>

        <View style={styles.ingredientsContainer}>
          <Text style={[styles.blockTitle, styles.ingredientsTitle]}>
            Ingredients
          </Text>

          <View style={styles.ingredientsContent}>
            {ingredients.map((ingredient, index) => (
              <Text style={styles.ingredientItem} key={index}>
                {"??? "}
                {ingredient}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.stepsContainer}>
          <Text style={[styles.blockTitle, styles.stepsTitle]}>Steps</Text>

          <View style={styles.stepsContent}>
            {steps.map((step, index) => (
              <Text style={styles.stepsItem} key={index}>
                <Text style={styles.stepMarker}>{"???? "}</Text>
                {step}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.labelsContainer}>
          {mealLabelsData.map((item) => (
            <View style={styles.label}>
              <Text style={styles.labelText}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;
