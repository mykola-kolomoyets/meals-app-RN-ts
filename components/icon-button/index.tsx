import {FC} from "react";
import {Pressable} from "react-native";
import {Ionicons} from '@expo/vector-icons';

import styles from './icon-button.styles';

type IconButtonProps = {
	icon: string;
	color?: string;
	onPress: () => void;
}
const IconButton: FC<IconButtonProps> = ({icon, color, onPress}) => (
	<Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
		<Ionicons name={icon as any} size={24} color={color || 'white'}/>
	</Pressable>
);

export default IconButton;