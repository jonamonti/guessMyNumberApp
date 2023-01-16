import { Text, StyleSheet } from 'react-native';

// export default function InstructionText({ children }) {
// 	return <View>{children}</View>;
// }

export default InstructionText = ({ children, style }) => {
	return <Text style={[s.instructionText, style]}>{children}</Text>;
};

const s = StyleSheet.create({
	instructionText: {
		fontSize: 24,
		fontFamily: 'open-sans',
	},
});
