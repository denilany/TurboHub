import React from "react";
import { Text, View } from "react-native";
import { ThemeToggle } from "./ThemeToggle";
import { useThemeStyles } from "../hooks/useThemeStyles";

export const WelcomeScreen: React.FC = () => {
  const { classes } = useThemeStyles();

  return (
    <View
      className={`flex-1 ${classes.background} justify-center items-center p-6`}
    >
      <Text className={`${classes.text} text-3xl font-bold mb-4`}>
        Car Yard
      </Text>

      <Text className={`${classes.text} text-lg mb-8 text-center`}>
        Welcome to your car marketplace app
      </Text>

      <View className={`${classes.card} p-6 rounded-xl mb-8 w-full max-w-sm`}>
        <Text className={`${classes.text} text-lg font-medium mb-2`}>
          Theme Settings
        </Text>
        <Text className={`${classes.text} opacity-70 mb-4`}>
          Switch between light and dark themes
        </Text>
        <ThemeToggle />
      </View>
    </View>
  );
};
