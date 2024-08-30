import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AmenitiesScreen from './AmenitiesScreen';
import PoolDetailScreen from './PoolDetailScreen';
import QRCodeScreen from '';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Amenities') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Pool Detail') {
            iconName = focused ? 'water' : 'water-outline';
          } else if (route.name === 'QR Code') {
            iconName = focused ? 'qr-code' : 'qr-code-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'menu' : 'menu-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Amenities" component={AmenitiesScreen} />
      <Tab.Screen name="Pool Detail" component={PoolDetailScreen} />
      <Tab.Screen name="QR Code" component={QRCodeScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
  );
}
