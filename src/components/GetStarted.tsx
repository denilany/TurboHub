import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';

// Image for the car (adjust path as needed)
const carImage = require('../assets/images/bmw_autumn.jpg');

const GetStartedScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-gray-100 items-center pt-8 px-4">
      <StatusBar barStyle="dark-content" backgroundColor="#f3f4f6" />

      {/* Car Image and 360° Overlay */}
      <View className="w-full items-center mb-10 mt-8">
        <Image source={carImage} className="w-80 h-40" style={{ resizeMode: 'contain' }} />
        
        {/* The horizontal line/circle for 360° indicator */}
        <View className="w-11/12 h-0.5 bg-gray-300 rounded-full my-4 relative">
          {/* A small indicator circle in the center */}
          <View className="absolute left-1/2 -ml-2 -mt-2 w-4 h-4 rounded-full bg-gray-500" />
        </View>

        {/* 360° button */}
        <TouchableOpacity className="bg-gray-800 rounded-full px-5 py-3 -mt-16 z-10">
          <Text className="text-white text-base font-semibold">360°</Text>
        </TouchableOpacity>
      </View>

      {/* Main Text */}
      <Text className="text-4xl font-extrabold text-gray-800 text-center px-4 mb-8">
        The best car in your hands with TurboHub
      </Text>

      {/* Pagination Dots */}
      <View className="flex-row items-center justify-center mb-10">
        <View className="w-8 h-2 bg-gray-700 rounded-full mx-1" />
        <View className="w-2 h-2 bg-gray-300 rounded-full mx-1" />
        <View className="w-2 h-2 bg-gray-300 rounded-full mx-1" />
      </View>

      {/* Get Started Button */}
      <TouchableOpacity className="bg-gray-900 w-11/12 py-4 rounded-xl absolute bottom-8">
        <Text className="text-white text-center text-lg font-semibold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStartedScreen;