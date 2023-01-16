import { View, Text, StyleSheet } from 'react-native';

export default function Card({ children }) {
	return <View style={s.card}>{children}</View>;
}

const s = StyleSheet.create({
	card: {
		// flex: 1,
		alignItems: 'center',
		padding: 16,
		marginTop: 36,
		marginHorizontal: 24,
		borderRadius: 8,
		backgroundColor: 'lightyellow',
		// shadows
		elevation: 0,
		shadowColor: 'orange',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		shadowOpacity: 0.25,
	},
});
