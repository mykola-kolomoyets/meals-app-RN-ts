import {StatusBar} from "expo-status-bar";
import {NavigationContainer, RouteProp} from "@react-navigation/native";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {createDrawerNavigator, DrawerNavigationOptions} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import {CATEGORIES, MEALS} from "./data";

import MealsScreen from "./screens/meals";
import MealDetailsScreen from "./screens/meal-details";
import CategoriesScreen from "./screens/categories";
import FavouritesScreen from "./screens/favourites";

import IconButton from "./components/icon-button";

import {Screens} from "./utils/enums/navigation";
import {RootDrawerParamList, RootStackParamList} from "./utils/types/navigation";
import {Provider} from "react-redux";
import store from "./store/redux";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const appHeaderOptions: NativeStackNavigationOptions = {
	headerStyle: {backgroundColor: "#351401"},
	headerTitleStyle: {color: "#ffffff"},
	headerTitleAlign: "center",
	headerTintColor: "#ffffff",
	contentStyle: {backgroundColor: "#3f2f25"},
};

const drawerHeaderOptions: DrawerNavigationOptions = {
	...appHeaderOptions as Partial<DrawerNavigationOptions>,
	drawerContentStyle: { backgroundColor: "#351401" },
	sceneContainerStyle: {backgroundColor: "#3f2f25"},
	drawerInactiveTintColor: '#ffffff',
	drawerActiveTintColor: "#351401",
	drawerActiveBackgroundColor: "#b17f5e"
}

const DrawerNavigator = () => (
	<Drawer.Navigator
		initialRouteName={Screens.categories}
		screenOptions={drawerHeaderOptions}
	>
		<Drawer.Screen
			name={Screens.categories}
			component={CategoriesScreen}
			options={{ title: 'All categories' }}
		/>
		<Drawer.Screen
			name={Screens.favourites}
			component={FavouritesScreen}
		/>
	</Drawer.Navigator>
);

const App = () => {
	
	const onMealDetailsHeaderRightPress = () => {
	};
	
	const getMealsCategoryTitle = (id: string) =>
		CATEGORIES.find((category) => category.id === id)?.title;
	
	const getMealTitle = (id: string) =>
		MEALS.find((meal) => meal.id === id)?.title;
	
	const getMealsScreenOptions: (props: {
		route: RouteProp<RootStackParamList, Screens.meals>;
		navigation: any;
	}) => NativeStackNavigationOptions = ({route}) => ({
		title: `${getMealsCategoryTitle(route.params.id)} meals`,
	});
	
	const getMealDetailsScreenOptions: (props: {
		route: RouteProp<RootStackParamList, Screens.mealDetails>;
		navigation: any;
	}) => NativeStackNavigationOptions = ({
		route: {
			params: {id: mealId, category},
		},
	}) => ({
		title: getMealTitle(mealId),
		headerBackTitle: `${getMealsCategoryTitle(category)}`,
		headerRight: () => <IconButton icon='star' onPress={onMealDetailsHeaderRightPress}/>
	});
	
	return (
		<>
			<StatusBar style="light"/>
			
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName={Screens.drawer}
						screenOptions={appHeaderOptions}
					>
						<Stack.Screen
							name={Screens.drawer}
							component={DrawerNavigator}
							options={{
								title: "All categories",
								headerShown: false
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
			</Provider>
		</>
	);
};

export default App;
