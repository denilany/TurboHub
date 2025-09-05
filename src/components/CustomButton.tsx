import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  isActive?: boolean;
}

export default function CustomButton({ title, isActive = false, ...props }: CustomButtonProps) {
  return (
    <TouchableOpacity 
      className="w-full py-4 rounded-full"
      style={{ backgroundColor: isActive ? '#101010' : '#393939' }}
      {...props}
    >
      <Text className="text-white text-center text-lg font-semibold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}