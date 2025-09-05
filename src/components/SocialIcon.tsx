import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useThemeStyles } from '../hooks/useThemeStyles';

interface SocialIconProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export default function SocialIcon({ children, ...props }: SocialIconProps) {
  const { classes } = useThemeStyles();

  return (
    <TouchableOpacity 
      className={`w-16 h-14 ${classes.card} ${classes.border} border rounded-xl items-center justify-center`}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}