import React, { useState } from 'react';
import {
	Text,
	TextInput,
	View,
	StyleSheet,
	Alert,
	Dimensions,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';

import PrimaryButton from '../components/primaryButton';
import Title from '../components/title';
import Card from '../components/card';
import InstructionText from '../components/instructionText';

export default function StartGame({ pickedNumberHandler }) {
	// local state
	const [enteredNumber, setEnteredNumber] = useState('');

	// functions
	const inputHandler = (txt) => {
		setEnteredNumber(txt);
	};

	const resetInputHandler = () => {
		setEnteredNumber('');
	};

	const confirmInputHandler = () => {
		const inputNumber = parseInt(enteredNumber);

		if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
			Alert.alert('Invalid number', 'Number has to be between 1 and 99', [
				{ text: 'Ok', style: 'destructive', onPress: setEnteredNumber },
			]);
			return;
		}

		pickedNumberHandler(inputNumber);
	};

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView style={styles.screen} behavior='position'>
				<View style={styles.rootContainer}>
					<View style={styles.titleContainer}>
						<Title>Guess my number!</Title>
					</View>
					<Card>
						<InstructionText>Enter a number</InstructionText>
						<Text>between 1 and 99</Text>
						<TextInput
							style={styles.input}
							maxLength={2}
							keyboardType='number-pad'
							autoCapitalize='none'
							autoCorrect={false}
							value={enteredNumber}
							onChangeText={inputHandler}
						/>
						<View style={styles.buttonsContainer}>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPressConfirm={confirmInputHandler}>
									Confirm
								</PrimaryButton>
							</View>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPressConfirm={resetInputHandler}>
									Reset
								</PrimaryButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

const deviceDims = Dimensions.get('window');
console.log(deviceDims);

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		marginTop: deviceDims.height < 1000 ? 50 : 100,
		alignItems: 'center',
	},
	titleContainer: {
		flexDirection: 'row',
	},
	inputContainer: {
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
	input: {
		height: 50,
		width: 50,
		textAlign: 'center',
		marginVertical: 8,
		borderBottomColor: 'black',
		borderBottomWidth: 2,
		fontSize: 32,
		fontWeight: 'bold',
		color: 'black',
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	buttonContainer: {
		flex: 1,
	},
	text: {
		fontSize: deviceDims.width < 1000 ? 20 * 0.75 : 20,
	},
});
