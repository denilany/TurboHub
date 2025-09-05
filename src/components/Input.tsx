import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, TextInputProps } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useThemeStyles } from '../hooks/useThemeStyles';

interface InputProps extends TextInputProps {
  icon: React.ReactNode;
  isPassword?: boolean;
  isPasswordVisible?: boolean;
  onTogglePassword?: () => void;
}

export default function Input({ 
  icon, 
  isPassword = false, 
  isPasswordVisible = false, 
  onTogglePassword,
  value,
  ...props 
}: InputProps) {
  const { classes } = useThemeStyles();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`flex-row items-center w-full ${classes.card} ${classes.border} rounded-xl px-4 mb-4`} style={{ borderColor: isFocused ? '#000000' : undefined, borderWidth: isFocused ? 1 : 0 }}>
      {icon}
      <TextInput
        className={`flex-1 h-14 text-lg ${classes.text}`}
        placeholderTextColor="#9ca3af"
        value={value}
        secureTextEntry={isPassword && !isPasswordVisible}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {isPassword && (
        <TouchableOpacity onPress={onTogglePassword}>
          <FontAwesome 
            name={isPasswordVisible ? "eye" : "eye-slash"} 
            size={18} 
            color={value?.toString().trim() ? "#101010" : "#9ca3af"} 
          />
        </TouchableOpacity>
      )}
    </View>
  );
}