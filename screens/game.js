import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Title from '../components/title';
import NumberContainer from '../components/numberContainer';
import PrimaryButton from '../components/primaryButton';
import Card from '../components/card';
import InstructionText from '../components/instructionText';
import GuessLogItem from '../components/guessLogItem';

// functions
const generateRandomBetween = (min, max, exclude) => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

// variables
let minBoundary = 1;
let maxBoundary = 100;

// component
export default function Game({
	userNumber,
	gameOverHandler,
	guessRoundsHandler,
}) {
	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	// variables
	const initialGuess = generateRandomBetween(1, 100, userNumber);

	// local states
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);
	const roundNumber = guessRounds.length;

	// functions
	const nextGuessHandler = (direction) => {
		console.log(guessRounds);
		// // validations
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", 'You know that this is wrong', [
				{ text: 'Sorry!', style: 'cancel' },
			]);
			return;
		}
		// game logic
		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}

		const newRndNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);

		guessRoundsHandler(guessRounds.length);

		if (userNumber === newRndNumber) {
			gameOverHandler();
			return;
		}

		setCurrentGuess(newRndNumber);
		setGuessRounds((currentGuessRound) => [newRndNumber, ...currentGuessRound]);
	};

	return (
		<View style={s.container}>
			<View style={s.titleContainer}>
				<Title>Oponent's guess</Title>
			</View>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={s.instructionText}>
					Higher or lower?
				</InstructionText>
				<View style={s.buttonsContainer}>
					<View style={s.buttonContainer}>
						<PrimaryButton
							onPressConfirm={nextGuessHandler.bind(this, 'lower')}
						>
							<Ionicons name='md-remove' size={24} />
						</PrimaryButton>
					</View>
					<View style={s.buttonContainer}>
						<PrimaryButton
							onPressConfirm={nextGuessHandler.bind(this, 'greater')}
						>
							<Ionicons name='md-add' size={24} />
						</PrimaryButton>
					</View>
				</View>
			</Card>
			<View style={s.listContainer}>
				<FlatList
					data={guessRounds}
					renderItem={(item) => (
						<GuessLogItem
							roundNumber={roundNumber - item.index}
							guess={item.item}
						/>
					)}
					keyExtractor={(item) => item}
				/>
			</View>
		</View>
	);
}

const s = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleContainer: {
		flexDirection: 'row',
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	buttonContainer: {
		flex: 1,
	},
	listContainer: {
		flex: 1,
		marginHorizontal: 24,
		marginTop: 16,
	},
	instructionText: {
		marginBottom: 12,
	},
});
