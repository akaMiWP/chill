import React, { useEffect, useState } from "react";
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// Define the shape of the props our component will accept
interface AnimatedInputBarProps {
  onDone: (taskText: string) => void;
}

const AnimatedInputBar: React.FC<AnimatedInputBarProps> = ({ onDone }) => {
  const { width: screenWidth } = useWindowDimensions();
  const [isEditing, setIsEditing] = useState(false);
  const [taskText, setTaskText] = useState("");

  // Define the initial and final widths for the animation
  const initialWidth = 64;
  // Account for the parent's horizontal padding (p-4 -> 1rem = 16px)
  const finalWidth = screenWidth - 32;

  // Create a shared value for the width. This can be changed from the UI thread.
  const animatedWidth = useSharedValue(initialWidth);

  // Define the animation configuration
  const animationConfig = {
    duration: 350,
    easing: Easing.bezier(0.33, 1, 0.68, 1), // A nice ease-out cubic effect
  };

  // Create an animated style object that will react to changes in animatedWidth
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
    };
  });

  // This effect runs whenever `isEditing` changes, triggering the animation
  useEffect(() => {
    animatedWidth.value = withTiming(
      isEditing ? finalWidth : initialWidth,
      animationConfig
    );
  }, [isEditing]);

  // Handler for when the user presses the 'Done' button
  const handleDonePress = () => {
    if (taskText.trim().length > 0) {
      onDone(taskText.trim());
    }
    setTaskText(""); // Clear the input
    setIsEditing(false); // Trigger the closing animation
  };

  return (
    <View className="p-4 items-end">
      <Animated.View
        style={animatedStyle}
        className="h-[56px] bg-[#FABF4F] rounded-[28px]"
      >
        {isEditing ? (
          // --- EDITING MODE ---
          <View className="flex-1 flex-row items-center justify-between px-5">
            <TextInput
              placeholder="Add a new task..."
              placeholderTextColor="#575757"
              value={taskText}
              onChangeText={setTaskText}
              autoFocus={true} // Automatically focus the input
              className="flex-1 text-lg font-medium h-full"
            />
            <TouchableOpacity onPress={handleDonePress}>
              <Text className="ml-4 text-lg font-bold">Done</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // --- INITIAL '+' BUTTON MODE ---
          <TouchableOpacity
            onPress={() => setIsEditing(true)}
            className="ml-auto rounded-[28px] bg-[#FABF4F] w-[64px] h-[56px] justify-center"
          >
            <Text
              // Adjust position for perfect centering on iOS
              style={{ lineHeight: Platform.OS === "ios" ? 42 : 40 }}
              className="pl-4 text-4xl font-light"
            >
              +
            </Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    </View>
  );
};

export default AnimatedInputBar;
