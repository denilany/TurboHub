import { FontAwesome, FontAwesome5, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, Text, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import BackArrow from '../src/components/BackArrow';
import CarIcon from '../src/components/CarIcon';
import CustomButton from '../src/components/CustomButton';
import Input from '../src/components/Input';
import SocialIcon from '../src/components/SocialIcon';
import { useThemeStyles } from '../src/hooks/useThemeStyles';

export default function SignUpScreen() {
  const { classes, colors } = useThemeStyles();
  const isDark = classes.text === 'text-white';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleBackButton =() => {
    router.push('/auth');
  };

  const handleSignIn = () => {
    router.push('/login');
  };

  const handleSignUp = () => {
    console.log('Signing up with:', email, password)
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView 
      className={`flex-1 ${classes.background}`} 
      style={{ backgroundColor: colors.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
      >
        <View className="flex-1 items-center p-6">
          <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

        <BackArrow onPress={handleBackButton} />

        { /* Main section */ }
        <View className="flex-1 justify-center items-center w-full mt-20">
          <View className="mb-16">
            <CarIcon size={120} />
          </View>

          <Text className={`text-4xl font-bold ${classes.text} mb-10`}>
            Create Your Account
          </Text>
          
          <Input
            icon={<MaterialIcons name="email" size={18} color={email.trim() ? "#101010" : "#9ca3af"} style={{ marginRight: 16 }} />}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            icon={<Fontisto name="locked" size={18} color={password.trim() ? "#101010" : "#9ca3af"} style={{ marginRight: 16 }} />}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            isPassword
            isPasswordVisible={isPasswordVisible}
            onTogglePassword={togglePasswordVisibility}
          />

          <View className="flex-row items-center justify-center w-full mb-6">
            <TouchableOpacity 
              className={`w-5 h-5 ${rememberMe ? 'bg-gray-800' : 'bg-transparent'} border-2 border-black rounded-md items-center justify-center mr-2`}
              onPress={toggleRememberMe}
            >
              {rememberMe && <FontAwesome name="check" size={14} color="white" />}
            </TouchableOpacity>
            <Text className="text-base text-gray-900">Remember me</Text>
          </View>
          
          <CustomButton
            title="Sign up"
            isActive={email.trim() !== "" || password.trim() !== ""}
            onPress={handleSignUp}
          />

          <View className="flex-row items-center my-6 w-full mt-10 mb-10">
            <View className={`flex-1 h-px ${classes.border}`} />
            <Text className="text-base text-gray-900 mx-4">or continue with</Text>
            <View className={`flex-1 h-px ${classes.border}`} />
          </View>
          
          <View className="flex-row items-center justify-center space-x-6 mb-10">
            <SocialIcon onPress={() => handleSocialLogin('Facebook')}>
              <FontAwesome5 name="facebook" size={24} color="#209AEE" />
            </SocialIcon>
            <View className="mx-3">
              <SocialIcon onPress={() => handleSocialLogin('Google')}>
                <FontAwesome name="google" size={24} color="#db4437" />
              </SocialIcon>
            </View>
            <SocialIcon onPress={() => handleSocialLogin('Apple')}>
              <FontAwesome name="apple" size={24} color={colors.text} />
            </SocialIcon>
          </View>

          <View className="flex-row">
            <Text className="text-gray-500">Already have an account?</Text>
            <TouchableOpacity className="ml-1" onPress={handleSignIn}>
              <Text className={`${classes.text} font-semibold`}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}