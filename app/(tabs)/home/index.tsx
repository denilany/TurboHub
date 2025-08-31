import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text className="text-2xl font-bold text-gray-800 mb-4">Welcome to Car Yard</Text>
      <Text className="text-gray-600 text-center px-4">
        Your one-stop destination for buying and selling cars
      </Text>
    </View>
  );
}