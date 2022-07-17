import { StatusBar } from "expo-status-bar";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { Text, View } from "react-native";

import { CATEGORIES, MEALS } from "./data";

import CategoriesScreen from "./screens/categories";
import MealsScreen from "./screens/meals";
import MealDetailsScreen from "./screens/meal-details";

import { Screens } from "./utils/enums/navigation";
import { RootStackParamList } from "./utils/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const appHeaderOptions: NativeStackNavigationOptions = {
    headerStyle: { backgroundColor: "#351401" },
    headerTitleStyle: { color: "#ffffff" },
    headerTitleAlign: "center",
    headerTintColor: "#ffffff",
    contentStyle: { backgroundColor: "#3f2f25" },
  };

  const getMealsCategoryTitle = (id: string) =>
    CATEGORIES.find((category) => category.id === id)?.title;

  const getMealTitle = (id: string) =>
    MEALS.find((meal) => meal.id === id)?.title;

  const getMealsScreenOptions: (props: {
    route: RouteProp<RootStackParamList, Screens.meals>;
    navigation: any;
  }) => NativeStackNavigationOptions = ({ route }) => ({
    title: `${getMealsCategoryTitle(route.params.id)} meals`,
  });

  const getMealDetailsScreenOptions: (props: {
    route: RouteProp<RootStackParamList, Screens.mealDetails>;
    navigation: any;
  }) => NativeStackNavigationOptions = ({
    route: {
      params: { id: mealId, category },
    },
  }) => ({
    title: getMealTitle(mealId),
    headerBackTitle: `${getMealsCategoryTitle(category)}`,
  });

  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Screens.categories}
          screenOptions={appHeaderOptions}
        >
          <Stack.Screen
            name={Screens.categories}
            component={CategoriesScreen}
            options={{
              title: "All categories",
            }}
          />

          <Stack.Screen
            name={Screens.meals}
            component={MealsScreen}
            options={getMealsScreenOptions}
          />

          <Stack.Screen
            name={Screens.mealDetails}
            component={MealDetailsScreen}
            options={getMealDetailsScreenOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
