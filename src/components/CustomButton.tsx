import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { useThemeStyles } from '../hooks/useThemeStyles';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  isActive?: boolean;
}

export default function CustomButton({ title, isActive = false, ...props }: CustomButtonProps) {
  const { classes } = useThemeStyles();

  const buttonClassName = `w-full py-4 rounded-full ${isActive ? classes.button : 'bg-gray-400'}`;
  const textClassName = `text-center text-lg font-semibold ${isActive ? classes.buttonText : 'text-white'}`;

  return (
    <TouchableOpacity 
      className={buttonClassName}
      {...props}
    >
      <Text className={textClassName}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
