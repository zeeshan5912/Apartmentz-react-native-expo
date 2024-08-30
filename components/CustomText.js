import React from 'react';
import { Text } from 'react-native';

export const PoppinsText = ({ style, ...props }) => (
  <Text {...props} style={[{ fontFamily: 'Poppins-Regular' }, style]} />
);

export const PoppinsBoldText = ({ style, ...props }) => (
  <Text {...props} style={[{ fontFamily: 'Poppins-Bold' }, style]} />
);
