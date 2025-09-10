import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useThemeStyles } from '../hooks/useThemeStyles';

interface BackArrowProps {
  onPress?: () => void;
  className?: string;
  text?: string;
}

const BackArrow: React.FC<BackArrowProps> = ({ onPress, className, text }) => {
  const { colors, classes } = useThemeStyles();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.back();
    }
  };

  if (text) {
    return (
      <View className={`absolute top-10 left-6 flex-row items-center ${className || ''}`}>
        <TouchableOpacity onPress={handlePress}>
          <FontAwesome5 name="arrow-left" size={18} color={colors.text} />
        </TouchableOpacity>
        <Text className={`ml-5 text-2xl font-bold ${classes.text}`}>{text}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity 
      className={`absolute top-20 left-6 ${className || ''}`}
      onPress={handlePress}
    >
      <FontAwesome5 name="arrow-left" size={18} color={colors.text} />
    </TouchableOpacity>
  );
};

export default BackArrow;