import { View, Text, StyleSheet } from 'react-native';

export default function GuessLogItem({ roundNumber, guess }) {
	return (
		<View style={s.container}>
			<Text style={s.text}>#{roundNumber}</Text>
			<Text style={s.text}>Opponent's guess: {guess}</Text>
		</View>
	);
}

const s = StyleSheet.create({
	container: {
		// flex: 1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderWidth: 2,
		borderColor: 'black',
		borderRadius: 40,
		padding: 16,
		marginVertical: 8,
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: 'gray',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 4,
		shadowRadius: 4,
	},
	text: {
		fontFamily: 'open-sans',
	},
});
