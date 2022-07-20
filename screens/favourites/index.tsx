import {DrawerScreenProps} from "@react-navigation/drawer";
import {View, Text, FlatList} from "react-native";

import {useAppSelector} from "../../store/redux";

import {MEALS} from "../../data";

import MealCard from "../../components/meal-card";

import {RootDrawerParamList} from "../../utils/types/navigation";
import {Screens} from "../../utils/enums/navigation";

const FavouritesScreen = ({ navigation }: DrawerScreenProps<RootDrawerParamList, Screens.favourites>) => {
	const favouriteMeals = useAppSelector(state => state.favourites.ids);
	
	const mealsToDisplay = MEALS.filter(meal => favouriteMeals.includes(meal.id));
	
	
	const onMealPress = (mealId: string) => {
		const chosenMealCategory = MEALS.find(meal => meal.id === mealId);
		navigation.navigate(Screens.categories);
	}
	
	return (
		<View>
			<FlatList
				data={mealsToDisplay}
				renderItem={(meal) => (
					<MealCard data={meal.item} onPress={() => {}} />
				)}
				keyExtractor={(meal) => meal.id}
			/>
		</View>
	)
};

export default FavouritesScreen;