import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import clsx from 'clsx';
import { useThemeStyles } from '../hooks/useThemeStyles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  className?: string;
  textClassName?: string;
}

const Button: React.FC<ButtonProps> = ({ title, className, textClassName, ...props }) => {
  const { classes } = useThemeStyles();
  
  return (
    <TouchableOpacity
      className={clsx(
        "w-full py-4 rounded-xl",
        classes.button,
        className
      )}
      {...props}
    >
      <Text
        className={clsx(
          "text-center text-lg font-semibold",
          classes.buttonText,
          textClassName
        )}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;