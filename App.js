import { StyleSheet, ImageBackground } from 'react-native';
import StartGame from './screens/startGame';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Game from './screens/game';
import GameOver from './screens/gameOver';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	// local state
	const [userNumber, setUserNumber] = useState();
	const [gameOver, setGameOver] = useState(false);
	const [guessRounds, setGuessRound] = useState(0);

	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});

	// fontsLoaded is a boolean that indicates if the font was loaded or not.
	// if fonts are not loaded, we want to render the loader.
	if (!fontsLoaded) {
		return <AppLoading />;
	}

	// function
	const pickedNumberHandler = (pickedNumber) => {
		setUserNumber(pickedNumber);
	};

	const gameOverHandler = () => {
		setGameOver(true);
	};

	const restartHandler = () => {
		setGameOver(false);
		setUserNumber('');
		setGuessRound(0);
	};

	// variable
	let screen = <StartGame pickedNumberHandler={pickedNumberHandler} />;
	if (userNumber && !gameOver) {
		screen = (
			<Game
				userNumber={userNumber}
				gameOverHandler={gameOverHandler}
				guessRoundsHandler={setGuessRound}
			/>
		);
	}

	if (gameOver) {
		screen = (
			<GameOver
				restartHandler={restartHandler}
				userNumber={userNumber}
				roundsNumber={guessRounds}
			/>
		);
	}

	return (
		<>
			<StatusBar style='dark' />
			<LinearGradient colors={['white', 'orange']} style={styles.container}>
				<ImageBackground
					source={require('./assets/dices.png')}
					style={styles.container}
					imageStyle={styles.backgroundImage}
					resizeMode='cover'
				>
					<SafeAreaView style={styles.container}>{screen}</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	backgroundImage: {
		opacity: 0.25,
	},
});
