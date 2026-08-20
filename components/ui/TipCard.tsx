import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";

type TipCardProps = {
  title: string;
  message: string;
  type?: "info" | "warning";
  delay?: number;
};

export function TipCard({ title, message, type = "info", delay = 0 }: TipCardProps) {
  const isWarning = type === "warning";
  const bgClass = isWarning ? "bg-amber-500/10" : "bg-blue-500/10";
  const borderClass = isWarning ? "border-amber-500/30" : "border-blue-500/30";
  const leftBorderClass = isWarning ? "border-l-amber-500" : "border-l-blue-500";
  const textTitleClass = isWarning ? "text-amber-400" : "text-blue-400";
  const textMsgClass = isWarning ? "text-amber-200/80" : "text-blue-200/80";
  const iconName = isWarning ? "warning" : "bulb";

  return (
    <Animated.View 
      entering={FadeInDown.delay(delay).duration(600).springify()}
      className={`p-4 rounded-xl border border-l-4 my-4 ${bgClass} ${borderClass} ${leftBorderClass}`}
    >
      <View className="flex-row items-center mb-2">
        <Ionicons name={iconName} size={20} color={isWarning ? "#fbbf24" : "#60a5fa"} />
        <Text className={`font-outfit-bold ml-2 ${textTitleClass}`}>{title}</Text>
      </View>
      <Text className={`font-outfit text-sm leading-relaxed ${textMsgClass}`}>
        {message}
      </Text>
    </Animated.View>
  );
}
