import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { useThemeStyles } from '../hooks/useThemeStyles';
import CarIconComponent from './CarIcon';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const { classes } = useThemeStyles();
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the spinning animation
    const spinAnimation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    spinAnimation.start();

    // Auto-finish after 3 seconds
    const timer = setTimeout(() => {
      spinAnimation.stop();
      onFinish();
    }, 3000);

    return () => {
      clearTimeout(timer);
      spinAnimation.stop();
    };
  }, [spinValue, onFinish]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View className={`flex-1 ${classes.background} justify-center items-center`}>
      {/* Car Icon */}
      <View className="mb-16">
        <CarIconComponent size={120} />
      </View>

      {/* Loading Spinner */}
      <Animated.View
        style={{
          transform: [{ rotate: spin }],
        }}
        className="w-8 h-8"
      >
        <View className="w-8 h-8 relative">
          {/* Create dots in a circle */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
            const angle = (index * 45) * (Math.PI / 180);
            const x = Math.cos(angle) * 12;
            const y = Math.sin(angle) * 12;
            
            return (
              <View
                key={index}
                className={`absolute w-2 h-2 ${classes.text === 'text-white' ? 'bg-white' : 'bg-black'} rounded-full`}
                style={{
                  left: 12 + x,
                  top: 12 + y,
                  opacity: 0.2 + (index * 0.1),
                }}
              />
            );
          })}
        </View>
      </Animated.View>
    </View>
  );
};
