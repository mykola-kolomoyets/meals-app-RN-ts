import { Screens } from "../enums/navigation";

export type RootStackParamList = {
  [Screens.categories]: undefined;
  [Screens.meals]: { id: string };
  [Screens.mealDetails]: { id: string; category: string };
};
