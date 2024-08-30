import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const amenities = [
  { name: 'Pool', image: require('../assets/pool 1.png') },
  { name: 'Gym', image: require('../assets/gym 1.png') },
  { name: 'Grill', image: require('../assets/grill 1.png') },
  { name: 'Movie Theater', image: require('../assets/movie_theater 1.png') },
  { name: 'Coworking', image: require('../assets/coworking 1.png') },
  { name: 'Paddel', image: require('../assets/paddel 1.png') },
];

export default function AmenitiesScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Amenities</Text>
      <View style={styles.grid}>
        {amenities.map((amenity, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.amenityCard,
              index % 2 === 1 ? styles.cardPaddingTop : null // Add margin top for images on the right side
            ]}
            onPress={() => navigation.navigate('PoolDetails')}
          >
            <Image 
              source={amenity.image} 
              style={styles.amenityImage}
            />
            <Text style={styles.amenityName}>{amenity.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 30, 
    paddingTop: 50, 
    backgroundColor: '#f5f5f5' 
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20,
    fontFamily: 'Poppins-Bold'  
  },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between' 
  },
  amenityCard: { 
    width: '45%', // Adjusted width
    borderRadius: 20, 
    overflow: 'hidden' 
  },
  cardPaddingTop: { 
    marginTop: 25, // Adjust the margin value as needed
  },
  amenityImage: { 
    width: '100%', 
    height: 150, // Adjusted height
    borderRadius: 20, 
  },
  amenityName: { 
    fontSize: 18, 
    // padding: 10, 
    textAlign: 'center',
    fontFamily: 'Poppins-Regular'  
  },
});
