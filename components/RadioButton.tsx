import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const RadioButton = ({
  onPressed,
  className,
  finished,
}: {
  onPressed: (enabled: boolean) => void;
  className: string;
  finished: boolean;
}) => {
  const [enabled, setEnabled] = useState<boolean>(finished);

  return (
    <TouchableOpacity
      className={`p-2 ${className}`}
      onPress={() => {
        onPressed(!enabled);
        setEnabled(!enabled);
      }}
    >
      <View
        className={`w-[20px] h-[20px] rounded-[4px] items-center justify-center ${
          enabled ? "bg-[#E8DECF]" : "border-[#E8DECF] border-2"
        }`}
      >
        {enabled && <Text className="text-[#9E8047] text-[12px]">✓</Text>}
      </View>
    </TouchableOpacity>
  );
};
export default RadioButton;
