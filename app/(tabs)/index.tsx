import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ScrollView className="bg-white p-4">
        <View className="flex-row">
          <View className="flex-col gap-2 max-w-[70%] p-4">
            <Text className="text-[#9E8047] font-semibold">
              5-minute Breathing
            </Text>
            <Text className="font-bold">Quick Calm</Text>
            <Text className="text-[#9E8047] font-semibold">
              Find peace in a short session.
            </Text>
            <TouchableOpacity
              className="bg-[#F5F0E5] w-[84] h-[32] flex justify-center rounded-2xl mt-4"
              onPress={() => router.push("/breathing")}
            >
              <Text className="font-semibold text-center">Start</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={require("../../assets/images/img-focused-flow.png")}
            className="ml-auto"
          />
        </View>

        <View className="flex-row">
          <View className="flex-col gap-2 max-w-[70%] p-4">
            <Text className="text-[#9E8047] font-semibold">
              25-minute Pomodoro
            </Text>
            <Text className="font-bold">Focused Flow</Text>
            <Text className="text-[#9E8047] font-semibold">
              Deep work with mindful breaks.
            </Text>
            <TouchableOpacity
              className="bg-[#F5F0E5] w-[84] h-[32] flex justify-center rounded-2xl mt-4"
              onPress={() => router.push("/breathing")}
            >
              <Text className="font-semibold text-center">Start</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={require("../../assets/images/img-quick-calm.png")}
            className="ml-auto"
          />
        </View>
      </ScrollView>
    </View>
  );
}
