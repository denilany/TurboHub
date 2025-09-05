import React from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';

// Assuming your image is in the assets folder
const backgroundImage = require('../assets/images/bmw_autumn.jpg');

const WelcomeScreen: React.FC = () => {
  return (
    <View className="flex-1">
      {/* Set status bar style to light content for better contrast */}
      <StatusBar barStyle="light-content" />
      <ImageBackground source={backgroundImage} className="flex-1 w-full h-full justify-end">
        <View className="p-6 pb-12 bg-black/20"> {/* Dark overlay for text readability */}
          <View className="flex-row items-center mb-2">
            <Text className="text-white text-3xl font-bold">Welcome to </Text>
            <Text className="text-white text-4xl ml-2">👋</Text>
          </View>
          <Text className="text-white text-6xl font-extrabold mb-4">
            TurboHub
          </Text>
          <Text className="text-white text-lg font-normal leading-6">
            The best car marketplace app of the century for your transportation needs!
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;