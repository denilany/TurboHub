import { View } from 'react-native';
import { WelcomeScreen } from '../../../src/components/WelcomeScreen';
import { useThemeStyles } from '../../../src/hooks/useThemeStyles';

export default function HomeScreen() {
  const { classes } = useThemeStyles();

  return (
    <View className={`flex-1 ${classes.background}`}>
      <WelcomeScreen />
    </View>
  );
}