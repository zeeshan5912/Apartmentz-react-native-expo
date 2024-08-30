import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function QRCodeScreen() {
  return (
    <View style={styles.container}>
      {/* Top Half with Linear Gradient Background */}
      <LinearGradient
        colors={['#33BBCF', '#BEF3F5']}
        style={styles.topHalf}
      >
        <Text style={styles.title}>Ricardo Gomez</Text>
        
        {/* Date Row with Icon */}
        <View style={styles.dateRow}>
          <MaterialIcons name="event" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.dates}>Friday 7th September</Text>
        </View>
        
        {/* Date Row with Icon */}
        <View style={styles.dateRow}>
          <MaterialIcons name="event" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.dates}>Sunday 9th September</Text>
        </View>
      </LinearGradient>

      {/* QR Code Image - Positioned to overlap both halves */}
      <View style={styles.qrCodeContainer}>
        <Image
          source={require('../assets/QR code.png')} 
          style={styles.qrCode}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <LinearGradient
          colors={['#33BBCF', '#DEF9FA']} // Gradient colors for share button
          style={[styles.button, styles.shareButton]}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Share</Text>
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
    backgroundColor: '#f5f5f5' 
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Top Half Styles
  topHalf: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    top: -40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: { 
    fontSize: 24, 
    color: '#fff', 
    marginBottom: 10,
    fontFamily: 'Poppins-Regular'
  },
  dateRow: {
    flexDirection: 'row',  
    alignItems: 'center',  
    marginBottom: 5,
    marginLeft: 2,
  },
  icon: {
    marginRight: 10,  
  },
  dates: { 
    fontSize: 20, 
    color: '#fff', 
    fontFamily: 'Poppins-Regular'
  },
  // QR Code Container
  qrCodeContainer: {
    position: 'absolute',
    top: '30%',  
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // QR Code Styles
  qrCode: { 
    width: 320, 
    height: 310 
  },
  // Button Container
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  // Button Styles
  button: {
    width: '75%',
    paddingVertical: 15,
    borderRadius: 50,
    marginVertical: 5,
    alignItems: 'center',
    top: 30,
  },
  cancelButton: {
    backgroundColor: 'transparent', 
    borderColor: 'red', 
    borderWidth: 1, 
  },
  shareButton: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Poppins-Bold'
  },
  cancelButtonText: {
    color: 'red', // Red text color for cancel button
    fontSize: 22,
    fontFamily: 'Poppins-Bold'
  },
});
