import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useThemeStyles } from '../hooks/useThemeStyles';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const { classes } = useThemeStyles();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      className={`${classes.button} px-4 py-2 rounded-lg ${className}`}
    >
      <Text className={`${classes.buttonText} font-medium`}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </Text>
    </TouchableOpacity>
  );
};
