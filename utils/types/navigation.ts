import { Screens } from "../enums/navigation";

export type RootStackParamList = {
  [Screens.drawer]: undefined;
  [Screens.meals]: { id: string };
  [Screens.mealDetails]: { id: string; category: string };
};

export type RootDrawerParamList = {
  [Screens.categories]: undefined,
  [Screens.favourites]: undefined,
};
