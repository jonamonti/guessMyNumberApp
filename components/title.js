import { View, Text, StyleSheet } from 'react-native';

import Colors from '../utils/colors';

export default function Title({ children }) {
	return (
		<View style={s.container}>
			<Text style={s.text}>{children}</Text>
		</View>
	);
}

const s = StyleSheet.create({
	container: {
		// flex: 1,
		width: '90%',
		borderWidth: 2,
		borderColor: 'black',
		borderRadius: 8,
		marginHorizontal: 24,
	},
	text: {
		fontSize: 24,
		fontFamily: 'open-sans-bold',
		color: 'black',
		textAlign: 'center',
		padding: 12,
	},
});
