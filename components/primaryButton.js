import { View, Text, StyleSheet, Pressable } from 'react-native';
import colors from '../utils/colors';

export default function PrimaryButton({ children, onPressConfirm }) {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.pressed, styles.buttonInnerContainer]
						: styles.buttonInnerContainer
				}
				onPress={onPressConfirm}
				android_ripple={{ color: 'white' }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		borderWidth: 2,
		borderColor: 'black',
		margin: 4,
		overflow: 'hidden',
	},
	buttonInnerContainer: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 5,
		backgroundColor: colors.buttonBackground,
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: 'bold',
	},
	pressed: {
		opacity: 0.75,
	},
});
