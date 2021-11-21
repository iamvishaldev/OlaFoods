import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import FoodListing from './src/screens/FoodListing/FoodListing';
import Cart from './src/screens/Cart/Cart';
import MainStack from './src/navigation/MainStack/MainStack';
import { Colors } from './src/global';

const screenOptions = {
	headerShow: false
}

function App() {
	return (
		<NavigationContainer>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar backgroundColor={Colors.LITE_ORANGE} />
				<MainStack />
			</SafeAreaView>
		</NavigationContainer>
	);
}

export default App;
