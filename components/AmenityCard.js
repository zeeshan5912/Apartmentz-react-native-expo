import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

export default function AmenityCard({ name, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* <Image source={require('../assets/images/pool.png')} style={styles.image} /> */}
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '45%',
    margin: '2.5%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  name: {
    marginTop: 8,
    fontSize: 16,
  },
});
