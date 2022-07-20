import {Button, Text} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import { CATEGORIES, MEALS } from "./data";

import CategoriesScreen from "./screens/categories";
import MealsScreen from "./screens/meals";
import MealDetailsScreen from "./screens/meal-details";

import { Screens } from "./utils/enums/navigation";
import { RootStackParamList } from "./utils/types/navigation";
import IconButton from "./components/icon-button";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const appHeaderOptions: NativeStackNavigationOptions = {
    headerStyle: { backgroundColor: "#351401" },
    headerTitleStyle: { color: "#ffffff" },
    headerTitleAlign: "center",
    headerTintColor: "#ffffff",
    contentStyle: { backgroundColor: "#3f2f25" },
  };
  
  const onMealDetailsHeaderRightPress = () => {};

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
    headerRight: () => <IconButton icon='star' onPress={onMealDetailsHeaderRightPress}/>
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
};

export default App;
