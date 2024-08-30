import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const InfoRow = ({ icon, text }) => (
  <View style={styles.infoRow}>
    <MaterialIcons name={icon} size={24} color="gray" style={styles.icon} />
    <Text style={[styles.infoText, { fontFamily: 'Poppins-Regular' }]}>{text}</Text>
  </View>
);

export default function PoolDetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/pool 1.png')} style={styles.image} />
        {/* Three dots image */}
        <Image source={require('../assets/image dots.png')} style={styles.dotsImage} />
      </View>
      <View style={styles.card}>
        <Text style={[styles.title, { fontFamily: 'Poppins-Bold' }]}>Pool</Text>
        <Text style={[styles.description, { fontFamily: 'Poppins-Regular' }]}>
          Elevate your weekends into moments of pure relaxation and joy. Perfect for quality time with family and friends.
        </Text>
        <InfoRow icon="calendar-today" text="Monday - Sunday" />
        <InfoRow icon="access-time" text="09:00 - 21:00" />
        <InfoRow icon="group" text="9 pax" />
      </View>
      <View style={styles.buttonContainer}>
        <LinearGradient
          colors={['#33BBCF', '#DEF9FA']} // Gradient colors for button
          style={styles.button}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Book</Text>
            <MaterialIcons name="arrow-forward" size={24} color="#fff" />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 0, 
    backgroundColor: '#f5f5f5' 
  },
  imageContainer: {
    position: 'relative',
  },
  image: { 
    width: '100%', 
    height: 370, 
    marginBottom: 20 
  },
  // Style for the three dots image
  dotsImage: {
    position: 'absolute',
    top: '80%', 
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -5 }], // Center the image by adjusting its position
    width: 50,
    height: 10,
  },
  card: { 
    backgroundColor: '#fff', 
    borderRadius: 45, 
    bottom: 70,
    paddingVertical: 20, 
    paddingHorizontal: 20, 
    width: '100%',
    alignSelf: 'center',
    // marginBottom: 20, 
    borderWidth: 30, // Set the border width
    borderColor: 'rgba(255, 255, 255, 0.5)', // White color with 50% opacity for the border
  },
  
  
  
  title: { 
    fontSize: 24, 
    marginBottom: 10 
  },
  description: { 
    fontSize: 16, 
    marginBottom: 5, 
    color: 'gray' 
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    color: '#33BBCF'
  },
  infoText: { 
    fontSize: 18,
    color: 'gray',
  },
  buttonContainer: {
    bottom: 70, 
    paddingHorizontal: 20, 
    paddingBottom: Platform.OS === 'ios' ? 20 : 10 
  },
  button: {
    borderRadius: 50,
    paddingVertical: 15,
    bottom: 20,
    alignSelf: 'center',
    width: '60%',
    paddingHorizontal: 30,
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection: 'row', 
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold',
    marginRight: 10, // Space between text and icon
  }
});
