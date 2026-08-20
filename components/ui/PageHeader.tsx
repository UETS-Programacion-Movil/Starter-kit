import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  iconName: keyof typeof Ionicons.glyphMap;
  gradientColors?: [string, string, ...string[]];
};

export function PageHeader({ 
  title, 
  subtitle, 
  iconName,
  gradientColors = ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 1)"] 
}: PageHeaderProps) {
  return (
    <Animated.View entering={FadeInDown.duration(600).springify()} className="mb-8">
      <View className="flex-row items-center mb-3">
        <View className="w-12 h-12 rounded-full bg-emerald-500/20 items-center justify-center mr-4 border border-emerald-500/30">
          <Ionicons name={iconName} size={24} color="#34d399" />
        </View>
        <Text className="text-3xl text-white font-outfit-bold flex-1">{title}</Text>
      </View>
      <Text className="text-slate-400 text-base leading-relaxed font-outfit">
        {subtitle}
      </Text>
    </Animated.View>
  );
}
