import { Text, View } from 'react-native';

export default function OrdersScreen() {
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text className="text-2xl font-bold text-gray-800 mb-4">Orders</Text>
      <Text className="text-gray-600 text-center px-4">
        Track your car purchases and sales
      </Text>
    </View>
  );
}