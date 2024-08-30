import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import { PoppinsText, PoppinsBoldText } from '../components/CustomText';  // Adjust path if needed
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  // Load the fonts
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  // Show AppLoading while fonts are loading
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <PoppinsBoldText style={styles.greeting}>Hello Ricardo!</PoppinsBoldText>
          <PoppinsText style={styles.subheading}>Batila Apartments - 1201</PoppinsText>
        </View>
        <Image source={require('../assets/Avatar.png')} style={styles.profileImage} />
      </View>
      
      <LinearGradient
        colors={['#33BBCF', '#BEF3F5']}
        style={styles.balanceContainer}
      >
        <PoppinsText style={styles.balanceText}>Due balance</PoppinsText>
        <View style={styles.horizontalLayout}>
          <PoppinsBoldText style={styles.amount}>$4,207.28</PoppinsBoldText>
          <TouchableOpacity style={styles.payButton}>
            <PoppinsBoldText style={styles.buttonText}>Pay</PoppinsBoldText>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <PoppinsBoldText style={styles.sectionTitle}>Amenities</PoppinsBoldText>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/amenity 1.png')} style={styles.image1} />
        <Image source={require('../assets/amenity 2.png')} style={styles.image2} />
        <Image source={require('../assets/amenity 3.png')} style={styles.image3} />
      </View>

      <PoppinsBoldText style={styles.sectionTitle}>Announcements</PoppinsBoldText>
      
      <View style={styles.announcementCardContainer}>
        <View style={styles.announcementCardLarge}>
          <View style={styles.iconAndText}>
            <Ionicons name="notifications-outline" size={24} color="#000" style={styles.bellIcon} />
            <View style={styles.textContainer}>
              <PoppinsBoldText style={styles.announcementText}>Rules updated</PoppinsBoldText>
              <PoppinsText style={styles.announcementDescription}>
                We updated some of the rules, please read carefully and sign it as so...
              </PoppinsText>
            </View>
          </View>
        </View>

        <View style={styles.smallCardsContainer}>
          <View style={styles.announcementCardSmall}>
            <PoppinsBoldText style={styles.announcementText}></PoppinsBoldText>
            <PoppinsText style={styles.announcementDescription}></PoppinsText>
          </View>
          <View style={styles.announcementCardSmall2}>
            <PoppinsBoldText style={styles.announcementText}></PoppinsBoldText>
            <PoppinsText style={styles.announcementDescription}></PoppinsText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    paddingTop: 50, 
    backgroundColor: '#f5f5f5' 
  },
  headerContainer: {
    flexDirection: 'row',    // Align items horizontally
    justifyContent: 'space-between',    // Space out the text and image
    alignItems: 'center',    // Center items vertically
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
  },
  greeting: { 
    fontSize: 24, 
    marginBottom: -10,
  },
  subheading: { 
    fontSize: 18, 
    color: 'gray',
  },
  profileImage: {
    width:  50,    // Adjust the width of the profile image
    height: 50,   // Adjust the height of the profile image
    borderRadius: 30,   // This makes the image circular
    marginLeft: 10,     // Adds space between the image and text
  },
  balanceContainer: {
    padding: 20,
    borderRadius: 10,
  },
  balanceText: { 
    fontSize: 16, 
    color: '#fff',
  },
  horizontalLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amount: { 
    fontSize: 28, 
    marginRight: 10,
    color: '#fff',
  },
  payButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingVertical: 5,
    bottom: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#7DE7EB',
    fontSize: 17,
  },
  sectionTitle: { 
    fontSize: 20, 
    marginTop: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  image1: {
    width: 287,
    height: 215,
    borderRadius: 20,
    zIndex: 1,
  },
  image2: {
    width: 28,
    height: 197,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    top: 8,
    left: -1,
    zIndex: 0,
  },
  image3: {
    width: 26,
    height: 182,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    top: 16,
    left: -4,
    zIndex: 0,
  },
  announcementCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  announcementCardLarge: { 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 13, 
    height: 90,
    width: '90%',
  },
  smallCardsContainer: {
    flexDirection: 'row',
    width: '5%', // Adjust width to fit the small cards in one row
  },
  announcementCardSmall: { 
    backgroundColor: '#DFFFEF', 
    padding: 10, 
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    top: 4,
    left: -17, 
    width: '5%',
    height: 83,
    marginBottom: 10, 
  },
  announcementCardSmall2: { 
    backgroundColor: '#DFEAFE', 
    padding: 10, 
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    top: 11,
    left: -21,
    height: 70,
    width: '50%', 
    marginBottom: 10, 
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellIcon: {
    color: '#F7DF4F',
    fontSize: 35,
    marginBottom: 5,
    marginRight: 10, 
  },
  textContainer: {
    flex: 1, 
  },
  announcementText: { 
    fontSize: 17, 
    marginBottom: 5,
  },
  announcementDescription: { 
    fontSize: 12, 
    color: 'gray',
  },
});
