import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useThemeStyles } from '../hooks/useThemeStyles';
import Button from './Button';

// Image for the car (adjust path as needed)
const carImage = require('../assets/images/mclaren.jpg');

const GetStartedScreen: React.FC = () => {
  const { classes, colors } = useThemeStyles();
  const isDark = classes.text === 'text-white';

  return (
    <View className={`flex-1 ${classes.background} items-center pt-8 px-4`} style={{ backgroundColor: colors.background }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={colors.background} />

      {/* Car Image and 360° Overlay - Centered */}
      <View className="absolute top-1/3 -mt-20 w-full items-center">
        <Image source={carImage} className="w-80 h-40" style={{ resizeMode: 'contain' }} />
        
        {/* The horizontal line/circle for 360° indicator */}
        <View className={`w-11/12 h-0.5 ${isDark ? 'bg-white' : 'bg-black'} rounded-full my-4 relative`}>
          {/* A small indicator circle in the center */}
          <View className={`absolute left-1/2 -ml-2 -mt-2 w-4 h-4 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`} />
        </View>

        {/* 360° button */}
        <TouchableOpacity className={`${isDark ? 'bg-white' : 'bg-black'} rounded-full px-5 py-3 -mt-16 z-10`}>
          <Text className={`${isDark ? 'text-black' : 'text-white'} text-base font-semibold`}>360°</Text>
        </TouchableOpacity>
      </View>

      {/* Main Text and Pagination positioned near button */}
      <View className="absolute bottom-32 w-full items-center">
        {/* Main Text */}
        <Text className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-black'} text-center mb-16 w-11/12`}>
          The best car in your hands with TurboHub
        </Text>

        {/* Pagination Dots */}
        <View className="flex-row items-center justify-center mb-8">
          <View className={`w-8 h-2 ${isDark ? 'bg-white' : 'bg-black'} rounded-full mx-1`} />
          <View className={`w-2 h-2 ${isDark ? 'bg-gray-600' : 'bg-gray-300'} rounded-full mx-1`} />
          <View className={`w-2 h-2 ${isDark ? 'bg-gray-600' : 'bg-gray-300'} rounded-full mx-1`} />
        </View>
      </View>

      {/* Get Started Button */}
      <View className="absolute bottom-8 w-11/12">
        <Button 
          title="Get Started"
          className="rounded-full"
          onPress={() => router.replace('/(tabs)/home')}
        />
      </View>
    </View>
  );
};

export default GetStartedScreen;