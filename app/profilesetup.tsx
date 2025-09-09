import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Button from '../src/components/Button';

const ProfileScreen: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [nickname, setNickname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  const [isFormFilled, setIsFormFilled] = useState(false);

  // Profile images (for demonstration)
  const emptyProfileImage = require('../assets/user-placeholder.png'); // Placeholder for a generic user icon
  const filledProfileImage = { uri: 'https://placehold.co/120x120/E8D6CC/white' }; // Placeholder for a real photo

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

  return (
    <View className="flex-1 bg-white items-center p-6">
      <StatusBar barStyle="dark-content" />

      {/* Header and Back Arrow */}
      <View className="flex-row items-center w-full relative mb-10">
        <TouchableOpacity className="absolute left-0">
          <FontAwesome5 name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-xl font-bold">Fill Your Profile</Text>
      </View>

      {/* Profile Picture and Edit Icon */}
      <View className="relative w-32 h-32 rounded-full mb-10">
        <Image
          source={isFormFilled ? filledProfileImage : emptyProfileImage}
          className="w-full h-full rounded-full"
        />
        <TouchableOpacity className="absolute bottom-0 right-0 p-2 rounded-full bg-black">
          <FontAwesome5 name="pen" size={14} color="white" />
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View className="w-full">
        {/* Full Name Input */}
        <TextInput
          className={`h-14 w-full border rounded-xl px-4 text-lg mb-4 ${isFormFilled ? 'border-black' : 'border-gray-300'}`}
          placeholder="Full Name"
          placeholderTextColor="#9ca3af"
          value={fullName}
          onChangeText={setFullName}
        />
        
        {/* Nickname Input */}
        <TextInput
          className={`h-14 w-full border rounded-xl px-4 text-lg mb-4 ${isFormFilled ? 'border-black' : 'border-gray-300'}`}
          placeholder="Nickname"
          placeholderTextColor="#9ca3af"
          value={nickname}
          onChangeText={setNickname}
        />

        {/* Date of Birth Input */}
        <View className={`flex-row items-center h-14 w-full border rounded-xl px-4 mb-4 ${isFormFilled ? 'border-black' : 'border-gray-300'}`}>
          <TextInput
            className="flex-1 text-lg"
            placeholder="Date of Birth"
            placeholderTextColor="#9ca3af"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
          />
          <FontAwesome5 name="calendar-alt" size={18} color={isFormFilled ? 'black' : '#9ca3af'} />
        </View>

        {/* Email Input */}
        <View className={`flex-row items-center h-14 w-full border rounded-xl px-4 mb-4 ${isFormFilled ? 'border-black' : 'border-gray-300'}`}>
          <TextInput
            className="flex-1 text-lg"
            placeholder="Email"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <FontAwesome5 name="envelope" size={18} color={isFormFilled ? 'black' : '#9ca3af'} />
        </View>

        {/* Phone Number Input */}
        <View className={`flex-row items-center h-14 w-full border rounded-xl px-4 mb-4 ${isFormFilled ? 'border-black' : 'border-gray-300'}`}>
          <View className="flex-row items-center mr-2">
            <Text className="text-xl">🇺🇸</Text>
            <FontAwesome5 name="chevron-down" size={12} color={isFormFilled ? 'black' : '#9ca3af'} className="ml-2" />
          </View>
          <TextInput
            className="flex-1 text-lg"
            placeholder="Phone Number"
            placeholderTextColor="#9ca3af"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>

        {/* Gender Input */}
        <View className={`flex-row items-center h-14 w-full border rounded-xl px-4 mb-8 ${isFormFilled ? 'border-black' : 'border-gray-300'}`}>
          <TextInput
            className="flex-1 text-lg"
            placeholder="Gender"
            placeholderTextColor="#9ca3af"
            value={gender}
            onChangeText={setGender}
          />
          <FontAwesome5 name="chevron-down" size={18} color={isFormFilled ? 'black' : '#9ca3af'} />
        </View>
      </View>
      
      {/* Continue Button */}
      <Button
        title="Continue"
        className={isFormFilled ? 'bg-black' : 'bg-gray-400'}
        onPress={handleContinue}
        disabled={!isFormFilled}
      />
    </View>
  );
};

export default ProfileScreen;
