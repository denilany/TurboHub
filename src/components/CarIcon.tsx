import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { View } from 'react-native';
import { useThemeStyles } from '../hooks/useThemeStyles';

interface CarIconProps {
  size?: number;
}

const CarIconComponent: React.FC<CarIconProps> = ({ size = 24 }) => {
  const { classes } = useThemeStyles();
  const iconColor = classes.text === 'text-white' ? 'white' : 'black';

  return (
    <View className="justify-center items-center">
      <FontAwesome6 name="car-side" size={size} color={iconColor} />
    </View>
  );
};

export default CarIconComponent;
