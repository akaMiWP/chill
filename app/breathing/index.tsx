// app/breathing/index.tsx
import { Stack } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const Display = () => {
  return (
    <View className="flex-row py-6 gap-4">
      <View className="flex-1 items-center gap-4">
        <View className="bg-[#F2EDE8] h-[56px] justify-center items-center w-full rounded-xl">
          <Text className="text-center font-bold">14</Text>
        </View>
        <View className="h-[24px justify-center items-center w-full">
          <Text className="text-center">Minutes</Text>
        </View>
      </View>

      <View className="flex-1 items-center gap-4">
        <View className="bg-[#F2EDE8] h-[56px] justify-center items-center w-full rounded-xl">
          <Text className="text-center font-bold">59</Text>
        </View>
        <View className="h-[24px] justify-center items-center w-full">
          <Text className="text-center">Seconds</Text>
        </View>
      </View>
    </View>
  );
};

const ActionButtons = () => {
  return (
    <View className="flex-row gap-3 py-3">
      <TouchableOpacity className="flex-1 h-[40px]">
        <View className="bg-[#FAF2E5] flex-1 rounded-2xl justify-center">
          <Text className="font-bold text-center">Pause</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="flex-1 h-[40px]">
        <View className="bg-[#F2EDE8] flex-1 rounded-2xl justify-center">
          <Text className="font-bold text-center">Resume</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function BreathingScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Meditation Session",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <View className="flex-1 bg-white px-4">
        <Display />
        <ActionButtons />
      </View>
    </>
  );
}
