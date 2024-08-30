import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BalanceCard({ balance }) {
  return (
    <View style={styles.card}>
      <Text style={styles.balanceText}>Due balance</Text>
      <Text style={styles.balanceAmount}>${balance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#d3f2fc',
    borderRadius: 8,
    marginVertical: 16,
  },
  balanceText: {
    fontSize: 16,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
