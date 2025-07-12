// app/breathing/index.tsx
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Display = ({
  minutes,
  seconds,
}: {
  minutes: number;
  seconds: number;
}) => {
  return (
    <View className="flex-row py-6 gap-4">
      <View className="flex-1 items-center gap-4">
        <View className="bg-[#F2EDE8] h-[56px] justify-center items-center w-full rounded-xl">
          <Text className="text-center font-bold">{minutes}</Text>
        </View>
        <View className="h-[24px] justify-center items-center w-full">
          <Text className="text-center">Minutes</Text>
        </View>
      </View>

      <View className="flex-1 items-center gap-4">
        <View className="bg-[#F2EDE8] h-[56px] justify-center items-center w-full rounded-xl">
          <Text className="text-center font-bold">{seconds}</Text>
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
  const [reset, setReset] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);

  useEffect(() => {
    let interval: number;

    if (hasStarted) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            resetState();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    if (reset) {
      setReset(false);
      setTimeLeft(15 * 60);
    }

    return () => clearInterval(interval);
  }, [hasStarted, reset]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const resetState = () => {
    setHasStarted(false);
    setReset(true);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Meditation Session",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <View className="flex-1 bg-white px-4">
        <Display minutes={minutes} seconds={seconds} />
        <ActionButtons
          hasStarted={hasStarted}
          onPress={setHasStarted}
          onReset={resetState}
        />
      </View>
    </>
  );
}
