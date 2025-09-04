import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import Button from './Button';
import CarIcon from './CarIcon';
import { useThemeStyles } from '../hooks/useThemeStyles';

const AuthScreen: React.FC = () => {
  const { classes, colors } = useThemeStyles();
  const isDark = classes.text === 'text-white';

  const handleSignIn = () => {
    console.log("Navigating to sign in screen...");
  };

  const handleSignUp = () => {
    console.log("Navigating to sign up screen...");
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Continuing with ${provider}...`);
  };

  return (
    <View className={`absolute inset-0 flex-1 ${classes.background} items-center p-6`}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={colors.background} />

      {/* Back Arrow Button */}
      <TouchableOpacity 
        className="absolute top-16 left-6" 
        onPress={() => router.back()}
      >
        <FontAwesome5 name="arrow-left" size={24} color={colors.text} />
      </TouchableOpacity>

      {/* Main Content Container */}
      <View className="flex-1 justify-center items-center w-full mt-32">
        {/* Car Icon */}
        <View className="mb-16">
          <CarIcon size={120} />
        </View>

        {/* Title */}
        <Text className={`text-5xl font-bold ${classes.text} mb-10`}>
          Let's you in
        </Text>
        
        {/* Social Media Buttons */}
        <TouchableOpacity 
          className={`flex-row items-center justify-center w-full ${classes.card} ${classes.border} border rounded-xl py-4 mb-4 px-8`}
          onPress={() => handleSocialLogin('Facebook')}
        >
          <FontAwesome5 name="facebook" size={24} color="#3b5998" />
          <Text className={`text-lg font-semibold ${classes.text} ml-3`}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className={`flex-row items-center justify-center w-full ${classes.card} ${classes.border} border rounded-xl py-4 mb-4 px-8`}
          onPress={() => handleSocialLogin('Google')}
        >
          <FontAwesome name="google" size={24} color="#db4437" />
          <Text className={`text-lg font-semibold ${classes.text} ml-3`}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className={`flex-row items-center justify-center w-full ${classes.card} ${classes.border} border rounded-xl py-4 mb-4 px-8`}
          onPress={() => handleSocialLogin('Apple')}
        >
          <FontAwesome name="apple" size={24} color={colors.text} />
          <Text className={`text-lg font-semibold ${classes.text} ml-3`}>
            Continue with Apple
          </Text>
        </TouchableOpacity>
        
        {/* Separator "or" */}
        <View className="flex-row items-center my-6 w-full">
          <View className={`flex-1 h-px ${classes.border}`} />
          <Text className="text-lg text-gray-500 mx-4 font-bold">or</Text>
          <View className={`flex-1 h-px ${classes.border}`} />
        </View>

        {/* Reusable Button Component */}
        <Button 
          title="Sign in with password" 
          className="mb-6 mt-3" 
          onPress={handleSignIn} 
        />
        
        {/* "Don't have an account" text and reusable Button for "Sign up" */}
        <View className="flex-row mt-2">
          <Text className="text-gray-500">Don't have an account?</Text>
          <TouchableOpacity className="ml-1" onPress={handleSignUp}>
            <Text className={`${classes.text} font-semibold`}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen;