import { View, Text } from 'react-native';
import { useThemeStyles } from '../../src/hooks/useThemeStyles';

export default function HomeScreen() {
  const { theme } = useThemeStyles();

  return (
    <View className={`flex-1 ${theme === 'dark' ? 'bg-black' : 'bg-white'} justify-center items-center`}>
      <Text className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-2xl font-bold`}>Home Screen</Text>
    </View>
  );
}