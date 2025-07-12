// app/breathing/index.tsx
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function BreathingScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Meditation Session",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <View className="flex-1 justify-center items-center">
        <Text className="font-bold text-lg">
          Welcome to the Breathing Screen
        </Text>
      </View>
    </>
  );
}
