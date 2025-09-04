import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import clsx from 'clsx';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  className?: string;
  textClassName?: string;
}

const Button: React.FC<ButtonProps> = ({ title, className, textClassName, ...props }) => {
  return (
    <TouchableOpacity
      className={clsx(
        "w-full py-4 rounded-xl",
        className
      )}
      {...props}
    >
      <Text
        className={clsx(
          "text-white text-center text-lg font-semibold",
          textClassName
        )}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;