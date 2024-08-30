import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    // Add other font weights as needed
  });

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync(); // Keep splash screen visible while fonts load
    return null; // Don't render anything while fonts are loading
  }

  SplashScreen.hideAsync(); // Hide splash screen after fonts load

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
