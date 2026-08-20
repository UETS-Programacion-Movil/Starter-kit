import { View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { PageHeader } from "../../components/ui/PageHeader";
import { CodeBlock } from "../../components/ui/CodeBlock";

function StepBadge({ number, title, delay }: { number: number, title: string, delay: number }) {
  return (
    <Animated.View entering={FadeInDown.delay(delay).duration(500).springify()} className="flex-row items-center mb-4 mt-6">
      <View className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 items-center justify-center mr-3">
        <Text className="text-indigo-400 font-outfit-bold">{number}</Text>
      </View>
      <Text className="text-xl font-outfit-bold text-white">{title}</Text>
    </Animated.View>
  );
}

export default function NativeWindScreen() {
  return (
    <View className="flex-1 bg-slate-950">
      <LinearGradient
        colors={['rgba(99, 102, 241, 0.15)', 'transparent']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 400 }}
      />
      <SafeAreaView edges={["top", "left", "right"]} className="flex-1">
        <ScrollView contentContainerClassName="p-6">
          <PageHeader 
            title="Instalar NativeWind"
            subtitle="Si estuvieras configurando un proyecto Expo desde cero, tendrías que seguir estos 6 pasos para instalar NativeWind v4."
            iconName="color-palette"
          />

          <StepBadge number={1} title="Instalar dependencias" delay={100} />
          <CodeBlock 
            filename="Terminal"
            code={`npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context`}
            delay={150}
          />

          <StepBadge number={2} title="Configurar Tailwind" delay={200} />
          <CodeBlock 
            filename="Terminal"
            code={`npx tailwindcss init`}
            delay={250}
          />
          <CodeBlock 
            filename="tailwind.config.js"
            code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: { extend: {} },
  plugins: [],
}`}
            delay={300}
          />

          <StepBadge number={3} title="Crear global.css" delay={350} />
          <CodeBlock 
            filename="global.css"
            code={`@tailwind base;\n@tailwind components;\n@tailwind utilities;`}
            delay={400}
          />

          <StepBadge number={4} title="Configurar Babel" delay={450} />
          <CodeBlock 
            filename="babel.config.js"
            code={`module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};`}
            delay={500}
          />

          <StepBadge number={5} title="Configurar Metro" delay={550} />
          <CodeBlock 
            filename="metro.config.js"
            code={`const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: "./global.css" });`}
            delay={600}
          />

          <StepBadge number={6} title="Importar CSS global" delay={650} />
          <CodeBlock 
            filename="app/_layout.tsx"
            code={`import "../global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}`}
            delay={700}
          />

          <View className="h-12" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
