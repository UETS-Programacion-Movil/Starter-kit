import { View, Text } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

type CodeBlockProps = {
  code: string;
  filename?: string;
  delay?: number;
};

export function CodeBlock({ code, filename, delay = 0 }: CodeBlockProps) {
  return (
    <Animated.View 
      entering={FadeInDown.delay(delay).duration(600).springify()} 
      className="mb-6 rounded-2xl overflow-hidden border border-slate-700/60 shadow-lg shadow-black/50"
    >
      {filename && (
        <View className="bg-slate-800/80 px-4 py-2 border-b border-slate-700/60 flex-row items-center">
          <View className="flex-row space-x-1.5 mr-3">
            <View className="w-3 h-3 rounded-full bg-rose-500/80" />
            <View className="w-3 h-3 rounded-full bg-amber-500/80" />
            <View className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </View>
          <Text className="text-slate-400 font-mono text-xs">{filename}</Text>
        </View>
      )}
      <View className="bg-slate-900/90 p-4">
        <Text className="text-emerald-300 font-mono text-sm leading-relaxed">
          {code}
        </Text>
      </View>
    </Animated.View>
  );
}
