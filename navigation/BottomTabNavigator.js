import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import AmenitiesScreen from '../screens/AmenitiesScreen';
import QRCodeScreen from '../screens/QRCodeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import PoolDetailsScreen from '../screens/PoolDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AmenitiesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Amenities" component={AmenitiesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PoolDetails" component={PoolDetailsScreen} options={{ headerShown: true, title: 'Pool Details' }} />
    </Stack.Navigator>
  );
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Amenities') {
            iconName = 'list';
          } else if (route.name === 'QRCode') {
            iconName = 'qr-code';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'skyblue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 60, paddingVertical: 10 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Amenities" component={AmenitiesStack} options={{ headerShown: false }} />
      <Tab.Screen name="QRCode" component={QRCodeScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
