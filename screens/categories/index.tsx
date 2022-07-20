import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {FlatList} from "react-native";

import {CATEGORIES} from "../../data";

import Category from "../../components/category";

import {RootStackParamList} from "../../utils/types/navigation";
import {Screens} from "../../utils/enums/navigation";

import styles from "./categories.styles";

const CategoriesScreen = ({
	navigation,
}: NativeStackScreenProps<RootStackParamList, Screens.categories>) => {
	const onCategoryPress = (id: string) =>
		navigation.navigate(Screens.meals, {id});
	
	return (
		<FlatList
			data={CATEGORIES}
			renderItem={(category) => (
				<Category data={category.item} onPress={onCategoryPress}/>
			)}
			keyExtractor={(category) => category.id}
			numColumns={2}
		/>
	);
};

export default CategoriesScreen;
