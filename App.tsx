import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/categories";
import MealsScreen from "./screens/meals";
import { Screens } from "./utils/enums/navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator initialRouteName={Screens.categories}>
          <Stack.Screen
            name={Screens.categories}
            component={CategoriesScreen}
          />
          <Stack.Screen name={Screens.meals} component={MealsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
