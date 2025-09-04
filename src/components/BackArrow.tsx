import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useThemeStyles } from '../hooks/useThemeStyles';

interface BackArrowProps {
  onPress?: () => void;
  className?: string;
}

const BackArrow: React.FC<BackArrowProps> = ({ onPress, className }) => {
  const { colors } = useThemeStyles();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.back();
    }
  };

  return (
    <TouchableOpacity 
      className={`absolute top-16 left-6 ${className || ''}`}
      onPress={handlePress}
    >
      <FontAwesome5 name="arrow-left" size={24} color={colors.text} />
    </TouchableOpacity>
  );
};

export default BackArrow;