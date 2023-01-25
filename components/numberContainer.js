import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function NumberContainer({ children }) {
	return (
		<View style={s.container}>
			<Text style={s.text}>{children}</Text>
		</View>
	);
}

const deviceDimensions = Dimensions.get('window');
console.log(deviceDimensions.width);

const s = StyleSheet.create({
	container: {
		// width: '50%',
		height: 100,
		width: 100,
		// padding: 16,
		marginHorizontal: 16,
		marginTop: 36,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		borderWidth: 4,
		borderColor: 'black',
	},
	text: {
		textAlign: 'center',
		fontSize: deviceDimensions.width > 1000 ? 1000 : 48,
		// fontWeight: 'bold',
		fontFamily: 'open-sans-bold',
	},
});
