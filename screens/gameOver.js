import { View, Text, StyleSheet, Image } from 'react-native';
import LottieView from 'lottie-react-native';

import PrimaryButton from '../components/primaryButton';
import Title from '../components/title';
import Colors from '../utils/colors';

export default function GameOver({ roundsNumber, restartHandler, userNumber }) {
	return (
		<View style={s.container}>
			<Title>GAME OVER</Title>
			<View style={s.imageContainer}>
				<LottieView
					source={require('../assets/images/67230-trophy-winner.json')}
					// loop
					autoPlay
				/>
				{/* <Image
					style={s.image}
					source={require('../assets/images/gameOver.png')}
				/> */}
			</View>
			<Text style={s.summaryText}>
				Your device needed <Text style={s.highlight}>{roundsNumber}</Text>{' '}
				rounds to guess the number <Text style={s.highlight}>{userNumber}</Text>
				.
			</Text>
			<View style={s.buttonContainer}>
				<PrimaryButton onPressConfirm={restartHandler}>
					Start new game!
				</PrimaryButton>
				{/* <FlatList
					data={allGuesses}
					renderItem={(item) => <Text>{item}</Text>}
				/> */}
			</View>
		</View>
	);
}

const s = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24,
	},
	imageContainer: {
		margin: 36,
		width: 300,
		height: 300,
		borderRadius: 1500,
		borderWidth: 3,
		borderColor: 'black',
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	summaryText: {
		fontFamily: 'open-sans',
		fontSize: 24,
		textAlign: 'center',
	},
	highlight: {
		fontFamily: 'open-sans-bold',
		fontSize: 32,
		color: 'black',
	},
	buttonContainer: {
		padding: 20,
	},
});
