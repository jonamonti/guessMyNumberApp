import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

import Colors from '../utils/colors';

export default function Title({ children }) {
	return (
		<View style={s.container}>
			<Text style={s.text}>{children}</Text>
		</View>
	);
}

const deviceDims = Dimensions.get('window');

const s = StyleSheet.create({
	container: {
		// flex: 1,
		width: '90%',
		borderWidth: Platform.OS === 'android' ? 2 : 0,
		borderColor: 'black',
		borderRadius: 8,
		marginHorizontal: 24,
	},
	text: {
		fontSize: deviceDims.width < 1000 ? 24 * 0.75 : 24,
		fontFamily: 'open-sans-bold',
		color: 'black',
		textAlign: 'center',
		padding: 12,
	},
});
