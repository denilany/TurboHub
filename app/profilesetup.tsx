import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { View, Text, StatusBar, TouchableOpacity, TextInput, Image, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from '../src/components/CustomButton';
import BackArrow from '../src/components/BackArrow';
import { useThemeStyles } from '../src/hooks/useThemeStyles';
import { countries, Country } from '../src/data/countries';

const ProfileScreen: React.FC = () => {
  const { classes, colors } = useThemeStyles();
  const isDark = classes.text === 'text-white';
  const [fullName, setFullName] = useState('');
  const [nickname, setNickname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [showGenderPicker, setShowGenderPicker] = useState(false);

  const [isFormFilled, setIsFormFilled] = useState(false);

  const genderOptions = ['Male', 'Female', 'Other'];

  // Profile images (for demonstration)
  const emptyProfileImage = require('../src/assets/icons/user.png');
  const filledProfileImage = { uri: 'https://placehold.co/120x120/E8D6CC/white' };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  useEffect(() => {
    // Check if all required fields have content and email is valid
    if (fullName.trim() && nickname.trim() && dateOfBirth.trim() && isValidEmail(email) && phoneNumber.trim() && gender.trim()) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [fullName, nickname, dateOfBirth, email, phoneNumber, gender]);

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

  const handleDateChange = (event: any, date?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (date) {
      setSelectedDate(date);
      setDateOfBirth(date.toLocaleDateString());
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const selectCountry = (country: Country) => {
    setSelectedCountry(country);
    setShowCountryPicker(false);
  };

  const selectGender = (selectedGender: string) => {
    setGender(selectedGender);
    setShowGenderPicker(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className={`flex-1 ${classes.background} items-center p-6`} style={{ backgroundColor: colors.background }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Header and Back Arrow */}
      <BackArrow
        text="Fill Your Profile"
        onPress={handleBackButton}
        className='mt-5'
      />

      {/* Profile Picture and Edit Icon */}
      <View className="relative w-32 h-32 rounded-full mb-10 mt-24">
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
        <TouchableOpacity 
          className={`flex-row items-center h-14 w-full ${classes.card} rounded-xl px-4 mb-5`} 
          style={{ borderColor: isFormFilled ? colors.text : '#9ca3af' }}
          onPress={showDatePickerModal}
        >
          <Text className={`flex-1 text-lg ${dateOfBirth ? classes.text : 'text-gray-400'}`}>
            {dateOfBirth || 'Date of Birth'}
          </Text>
          <FontAwesome5 name="calendar-alt" size={18} color={dateOfBirth ? colors.text : '#9ca3af'} />
        </TouchableOpacity>
        
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
            maximumDate={new Date()}
          />
        )}

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
          <FontAwesome5 name="envelope" size={18} color={isValidEmail(email) ? colors.text : '#9ca3af'} />
        </View>

        {/* Phone Number Input */}
        <View className={`flex-row items-center h-14 w-full ${classes.card} rounded-xl px-4 mb-5`} style={{ borderColor: isFormFilled ? colors.text : '#9ca3af' }}>
          <TouchableOpacity 
            className="flex-row items-center mr-3"
            onPress={() => setShowCountryPicker(!showCountryPicker)}
          >
            <Text className="text-xl">{selectedCountry.flag}</Text>
            <Text className={`text-sm ${classes.text} mx-1`}>{selectedCountry.code}</Text>
            <FontAwesome5 name="chevron-down" size={12} color={phoneNumber.trim() ? colors.text : '#9ca3af'} />
          </TouchableOpacity>
          <TextInput
            className={`flex-1 text-lg ${classes.text}`}
            placeholder="Phone Number"
            placeholderTextColor="#9ca3af"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
        
        {showCountryPicker && (
          <View className={`absolute bottom-24 left-0 right-0 ${classes.card} ${classes.border} border rounded-xl mx-6 h-48 z-10`} style={{ backgroundColor: colors.background }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {countries.map((country, index) => (
                <TouchableOpacity
                  key={index}
                  className={`flex-row items-center p-3 ${index < countries.length - 1 ? 'border-b' : ''} ${classes.border}`}
                  onPress={() => selectCountry(country)}
                >
                  <Text className="text-xl mr-3">{country.flag}</Text>
                  <Text className={`text-sm ${classes.text} mr-2`}>{country.code}</Text>
                  <Text className={`flex-1 text-sm ${classes.text}`}>{country.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Gender Input */}
        <TouchableOpacity 
          className={`flex-row items-center h-14 w-full ${classes.card} rounded-xl px-4 mb-20`} 
          style={{ borderColor: isFormFilled ? colors.text : '#9ca3af' }}
          onPress={() => setShowGenderPicker(!showGenderPicker)}
        >
          <Text className={`flex-1 text-lg ${gender ? classes.text : 'text-gray-400'}`}>
            {gender || 'Gender'}
          </Text>
          <FontAwesome5 name="caret-down" size={18} color={gender ? colors.text : '#9ca3af'} />
        </TouchableOpacity>
        
        {showGenderPicker && (
          <View className={`absolute bottom-24 left-0 right-0 ${classes.card} rounded-xl mx-6 z-10`} style={{ backgroundColor: colors.background }}>
            {genderOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                className={`p-4 ${index < genderOptions.length - 1 ? 'border-b' : ''} ${classes.border}`}
                onPress={() => selectGender(option)}
              >
                <Text className={`text-lg ${classes.text}`}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      
      {/* Continue Button */}
      <CustomButton
        title="Continue"
        isActive={isFormFilled}
        onPress={handleContinue}
      />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProfileScreen;
