import { View, Text } from "react-native";

import styles from "./meal-detail.style";

type MealDetailProps = {
  duration: number;
  complexity: string;
  affordability: string;
};
const MealDetail = ({
  duration,
  complexity,
  affordability,
}: MealDetailProps) => (
  <View style={styles.detailsContainer}>
    <Text>{duration}m</Text>
    <Text>{complexity.toUpperCase()}</Text>
    <Text>{affordability.toUpperCase()}</Text>
  </View>
);

export default MealDetail;
