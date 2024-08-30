import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AmenitiesScreen from './screens/AmenitiesScreen';
import PoolDetailScreen from './screens/PoolDetailScreen';
import QRCodeScreen from './screens/QRCodeScreen';

// Import your image assets
import homeIcon from './assets/navicons/Home.png';
import amenitiesIcon from './assets/navicons/Amenities.png';
import poolIcon from './assets/navicons/Visitors.png';
import qrCodeIcon from './assets/navicons/Finances.png';
import profileIcon from './assets/navicons/Menu.png';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;

          // Use the same icon for focused and unfocused states
          if (route.name === 'Home') {
            icon = homeIcon;
          } else if (route.name === 'Amenities') {
            icon = amenitiesIcon;
          } else if (route.name === 'Pool Detail') {
            icon = poolIcon;
          } else if (route.name === 'QR Code') {
            icon = qrCodeIcon;
          } else if (route.name === 'Profile') {
            icon = profileIcon;
          }

          return <Image source={icon} style={{ width: 28, height: 34 }} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: () => null, // Hide the tab bar label
        headerShown: false, // Hide the header
        tabBarStyle: {
          paddingHorizontal: 10,  // Padding on the left and right
          paddingBottom: 5,       // Padding on the bottom
          borderRadius: 30,       // Border radius
          height: 70,             // Adjust the height if needed
          backgroundColor: 'white', // Background color (optional)
          position: 'absolute',
          left:8, 
          right:8,   // Ensure the tab bar is positioned correctly
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Amenities" component={AmenitiesScreen} />
      <Tab.Screen name="Pool Detail" component={PoolDetailScreen} />
      <Tab.Screen name="QR Code" component={QRCodeScreen} />
      <Tab.Screen 
        name="Profile" 
        component={HomeScreen}  // Reusing HomeScreen, you can change this to any existing screen component
      />
    </Tab.Navigator>
  );
}
