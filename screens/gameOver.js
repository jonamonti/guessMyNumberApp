import {
	View,
	ScrollView,
	Text,
	Image,
	StyleSheet,
	useWindowDimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';

import PrimaryButton from '../components/primaryButton';
import Title from '../components/title';
import Colors from '../utils/colors';

export default function GameOver({ roundsNumber, restartHandler, userNumber }) {
	const { width, height } = useWindowDimensions();
	// console.log('w' + width, 'h' + height);

	let imageSize = 300;

	if (width < 380) imageSize = 150;
	if (height < 500) imageSize = 80;

	let imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
	};
	return (
		<ScrollView style={s.screen}>
			<View style={s.container}>
				<Title>GAME OVER</Title>
				<View style={[s.imageContainer, imageStyle]}>
					{/* <LottieView
					source={require('../assets/images/67230-trophy-winner.json')}
					// loop
					autoPlay
				/> */}
					<Image
						style={s.image}
						source={require('../assets/images/gameOver.png')}
					/>
				</View>
				<Text style={s.summaryText}>
					Your device needed <Text style={s.highlight}>{roundsNumber}</Text>{' '}
					rounds to guess the number{' '}
					<Text style={s.highlight}>{userNumber}</Text>.
				</Text>
				<View style={s.buttonContainer}>
					<PrimaryButton onPressConfirm={restartHandler}>
						Start new game!
					</PrimaryButton>
				</View>
			</View>
		</ScrollView>
	);
}

const s = StyleSheet.create({
	screen: { flex: 1 },
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24,
	},
	imageContainer: {
		margin: 36,
		// width: 300,
		// height: 300,
		// borderRadius: 150,
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
