import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { View, Text, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from '../src/components/CustomButton';
import BackArrow from '../src/components/BackArrow';
import { useThemeStyles } from '../src/hooks/useThemeStyles';

const ProfileScreen: React.FC = () => {
  const { classes, colors } = useThemeStyles();
  const isDark = classes.text === 'text-white';
  const [fullName, setFullName] = useState('');
  const [nickname, setNickname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  const [isFormFilled, setIsFormFilled] = useState(false);

  // Profile images (for demonstration)
  const emptyProfileImage = require('../src/assets/icons/user.png');
  const filledProfileImage = { uri: 'https://placehold.co/120x120/E8D6CC/white' };

  useEffect(() => {
    // Check if any of the required fields have content
    if (fullName.length > 0 || email.length > 0) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [fullName, email]);

  const handleContinue = () => {
    if (isFormFilled) {
      console.log("Form is valid. Submitting profile data...");
      // Add your profile submission logic here
    } else {
      console.log("Please fill out the form to continue.");
    }
  };

  const handleBackButton = () => {
    router.push('/signup')
  }

  return (
    <View className={`flex-1 ${classes.background} items-center p-6`} style={{ backgroundColor: colors.background }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Header and Back Arrow */}
      <BackArrow
        text="Fill Your Profile"
        onPress={handleBackButton}
      />

      {/* Profile Picture and Edit Icon */}
      <View className="relative w-32 h-32 rounded-full mb-10 mt-20">
        <Image
          source={isFormFilled ? filledProfileImage : emptyProfileImage}
          className="w-full h-full rounded-full"
        />
        <TouchableOpacity className={`absolute bottom-0 right-0 p-2 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`}>
          <FontAwesome5 name="pen" size={14} color={isDark ? 'black' : 'white'} />
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View className="w-full">
        {/* Full Name Input */}
        <TextInput
          className={`h-14 w-full ${classes.card} rounded-xl px-4 text-lg mb-5 ${classes.text}`}
          style={{ borderColor: isFormFilled ? colors.text : '#9ca3af' }}
          placeholder="Full Name"
          placeholderTextColor="#9ca3af"
          value={fullName}
          onChangeText={setFullName}
        />
        
        {/* Nickname Input */}
        <TextInput
          className={`h-14 w-full ${classes.card} rounded-xl px-4 text-lg mb-5 ${classes.text}`}
          style={{ borderColor: isFormFilled ? colors.text : '#9ca3af' }}
          placeholder="Nickname"
          placeholderTextColor="#9ca3af"
          value={nickname}
          onChangeText={setNickname}
        />

        {/* Date of Birth Input */}
        <View className={`flex-row items-center h-14 w-full ${classes.card} rounded-xl px-4 mb-5`} style={{ borderColor: isFormFilled ? colors.text : '#9ca3af' }}>
          <TextInput
            className={`flex-1 text-lg ${classes.text}`}
            placeholder="Date of Birth"
            placeholderTextColor="#9ca3af"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
          />
          <FontAwesome5 name="calendar-alt" size={18} color={isFormFilled ? colors.text : '#9ca3af'} />
        </View>

        {/* Email Input */}
        <View className={`flex-row items-center h-14 w-full ${classes.card} rounded-xl px-4 mb-5`} style={{ borderColor: isFormFilled ? colors.text : '#9ca3af' }}>
          <TextInput
            className={`flex-1 text-lg ${classes.text}`}
            placeholder="Email"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <FontAwesome5 name="envelope" size={18} color={isFormFilled ? colors.text : '#9ca3af'} />
        </View>

        {/* Phone Number Input */}
        <View className={`flex-row items-center h-14 w-full ${classes.card} rounded-xl px-4 mb-5`} style={{ borderColor: isFormFilled ? colors.text : '#9ca3af' }}>
          <View className="flex-row items-center mr-2">
            <Text className="text-xl">🇺🇸</Text>
            <FontAwesome5 name="chevron-down" size={12} color={isFormFilled ? colors.text : '#9ca3af'} className="ml-2" />
          </View>
          <TextInput
            className={`flex-1 text-lg ${classes.text}`}
            placeholder="Phone Number"
            placeholderTextColor="#9ca3af"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>

        {/* Gender Input */}
        <View className={`flex-row items-center h-14 w-full ${classes.card} rounded-xl px-4 mb-20`} style={{ borderColor: isFormFilled ? colors.text : '#9ca3af' }}>
          <TextInput
            className={`flex-1 text-lg ${classes.text}`}
            placeholder="Gender"
            placeholderTextColor="#9ca3af"
            value={gender}
            onChangeText={setGender}
          />
          <FontAwesome5 name="caret-down" size={18} color={isFormFilled ? colors.text : '#9ca3af'} />
        </View>
      </View>
      
      {/* Continue Button */}
      <CustomButton
        title="Continue"
        isActive={isFormFilled}
        onPress={handleContinue}
      />
    </View>
  );
};

export default ProfileScreen;
