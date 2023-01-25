import { Text, StyleSheet, Dimensions } from 'react-native';

// export default function InstructionText({ children }) {
// 	return <View>{children}</View>;
// }

export default InstructionText = ({ children, style }) => {
	return <Text style={[s.instructionText, style]}>{children}</Text>;
};

const deviceDims = Dimensions.get('window');

const s = StyleSheet.create({
	instructionText: {
		fontSize: deviceDims.width < 1000 ? 24 * 0.75 : 24,
		fontFamily: 'open-sans',
	},
});
