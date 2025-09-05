import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { FontAwesome, FontAwesome5, Fontisto, MaterialIcons } from '@expo/vector-icons';
import CarIcon from '../src/components/CarIcon';
import BackArrow from '../src/components/BackArrow';
import { useThemeStyles } from '../src/hooks/useThemeStyles';

export default function SignUpScreen() {
  const { classes, colors } = useThemeStyles();
  const isDark = classes.text === 'text-white';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = () => {
    console.log("Signing up with email and password...");
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Continuing with ${provider}...`);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <KeyboardAvoidingView 
      className={`flex-1 ${classes.background}`} 
      style={{ backgroundColor: colors.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
    >
      <View className="flex-1 items-center p-6">
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      <BackArrow />

      { /* Main section */ }
      <View className="flex-1 justify-center items-center w-full mt-20">
        <View className="mb-16">
          <CarIcon size={120} />
        </View>

        <Text className={`text-4xl font-bold ${classes.text} mb-10`}>
          Create Your Account
        </Text>
        
        <View className={`flex-row items-center w-full ${classes.card} ${classes.border} border rounded-xl px-4 mb-4`}>
          <MaterialIcons name="email" size={18} color={email.trim() ? "#101010" : "#9ca3af"} style={{ marginRight: 16 }} />
          <TextInput
            className={`flex-1 h-14 text-lg ${classes.text}`}
            placeholder="Email"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className={`flex-row items-center w-full ${classes.card} ${classes.border} border rounded-xl px-4 mb-4`}>
          <Fontisto name="locked" size={18} color={password.trim() ? "#101010" : "#9ca3af"} style={{ marginRight: 16 }} />
          <TextInput
            className={`flex-1 h-14 text-lg ${classes.text}`}
            placeholder="Password"
            placeholderTextColor="#9ca3af"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <FontAwesome name={isPasswordVisible ? "eye" : "eye-slash"} size={18} color={password.trim() ? "#101010" : "#9ca3af"} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-center w-full mb-6">
          <TouchableOpacity 
            className={`w-5 h-5 ${rememberMe ? 'bg-gray-800' : 'bg-transparent'} border-2 border-black rounded-md items-center justify-center mr-2`}
            onPress={toggleRememberMe}
          >
            {rememberMe && <FontAwesome name="check" size={14} color="white" />}
          </TouchableOpacity>
          <Text className="text-base text-gray-900">Remember me</Text>
        </View>
        
        <TouchableOpacity 
          className="w-full py-4 rounded-full"
          style={{ backgroundColor: email.trim() || password.trim() ? '#101010' : '#393939' }}
          onPress={handleSignUp}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Sign up
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center my-6 w-full mt-10 mb-10">
          <View className={`flex-1 h-px ${classes.border}`} />
          <Text className="text-base text-gray-900 mx-4">or continue with</Text>
          <View className={`flex-1 h-px ${classes.border}`} />
        </View>
        
        <View className="flex-row items-center justify-center space-x-6 mb-10">
          <TouchableOpacity 
            className={`w-16 h-14 ${classes.card} ${classes.border} border rounded-xl items-center justify-center`}
            onPress={() => handleSocialLogin('Facebook')}
          >
            <FontAwesome5 name="facebook" size={24} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity 
            className={`w-16 h-14 ${classes.card} ${classes.border} border rounded-lg items-center justify-center mx-3`}
            onPress={() => handleSocialLogin('Google')}
          >
            <FontAwesome name="google" size={24} color="#db4437" />
          </TouchableOpacity>
          <TouchableOpacity 
            className={`w-16 h-14 ${classes.card} ${classes.border} border rounded-lg items-center justify-center`}
            onPress={() => handleSocialLogin('Apple')}
          >
            <FontAwesome name="apple" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View className="flex-row">
          <Text className="text-gray-500">Already have an account?</Text>
          <TouchableOpacity className="ml-1">
            <Text className={`${classes.text} font-semibold`}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </KeyboardAvoidingView>
  );
}