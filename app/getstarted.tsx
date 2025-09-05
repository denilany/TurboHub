import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useThemeStyles } from '../src/hooks/useThemeStyles';
import Button from '../src/components/Button';

// Image for the car (adjust path as needed)
const carImage = require('../src/assets/images/mclaren.jpg');

const GetStartedScreen: React.FC = () => {
  const { classes, colors } = useThemeStyles();
  const isDark = classes.text === 'text-white';
  const primaryColor = isDark ? 'bg-white' : 'bg-black';
  const textColor = isDark ? 'text-white' : 'text-black';
  const inverseTextColor = isDark ? 'text-black' : 'text-white';
  const dotColor = isDark ? 'bg-gray-600' : 'bg-gray-300';

  return (
    <View className={`flex-1 ${classes.background} items-center pt-8 px-4`}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={colors.background} />

      <View className="absolute top-1/3 -mt-20 w-full items-center">
        <Image source={carImage} className="w-80 h-40" style={{ resizeMode: 'contain' }} />
        
        <View className={`w-11/12 h-0.5 ${primaryColor} rounded-full my-4 relative`}>
          <View className={`absolute left-1/2 -ml-2 -mt-2 w-4 h-4 rounded-full ${primaryColor}`} />
        </View>

        <TouchableOpacity className={`${primaryColor} rounded-full px-5 py-3 -mt-16 z-10`}>
          <Text className={`${inverseTextColor} text-base font-semibold`}>360°</Text>
        </TouchableOpacity>
      </View>

      <View className="absolute bottom-32 w-full items-center">
        <Text className={`text-4xl font-bold ${textColor} text-center mb-16 w-11/12`}>
          The best car in your hands with TurboHub
        </Text>

        <View className="flex-row items-center justify-center mb-8">
          <View className={`w-8 h-2 ${primaryColor} rounded-full mx-1`} />
          <View className={`w-2 h-2 ${dotColor} rounded-full mx-1`} />
          <View className={`w-2 h-2 ${dotColor} rounded-full mx-1`} />
        </View>
      </View>

      <View className="absolute bottom-8 w-11/12">
        <Button 
          title="Get Started"
          className="rounded-full"
          onPress={() => router.push('/auth')}
        />
      </View>
    </View>
  );
};

export default GetStartedScreen;