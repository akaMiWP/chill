// app/breathing/index.tsx
import { Stack } from "expo-router";
import { useState } from "react";
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

const ActionButtons = ({
  hasStarted,
  onPress,
  onReset,
}: {
  hasStarted: boolean;
  onPress: (hasStarted: boolean) => void;
  onReset: () => void;
}) => {
  return (
    <View className="flex-row gap-3 py-3">
      <TouchableOpacity
        className="flex-1 h-[40px]"
        onPress={() => onPress(!hasStarted)}
      >
        <View className="bg-[#FAF2E5] flex-1 rounded-2xl justify-center">
          <Text className="font-bold text-center">
            {hasStarted ? "Pause" : "Start"}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="flex-1 h-[40px]" onPress={() => onReset()}>
        <View className="bg-[#ea7070?] flex-1 rounded-2xl justify-center">
          <Text className="font-bold text-center">Reset</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function BreathingScreen() {
  const [hasStarted, setHasStarted] = useState<boolean>(false);

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
        <ActionButtons
          hasStarted={hasStarted}
          onPress={setHasStarted}
          onReset={() => setHasStarted(false)}
        />
      </View>
    </>
  );
}
