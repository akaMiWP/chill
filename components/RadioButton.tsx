import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

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
        className={`w-[20px] h-[20px] rounded-[4px] ${
          enabled ? "bg-[#E8DECF]" : "border-[#E8DECF] border-2"
        }`}
      />
    </TouchableOpacity>
  );
};
export default RadioButton;
