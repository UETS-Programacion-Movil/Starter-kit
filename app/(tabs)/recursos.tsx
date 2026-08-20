import { View, ScrollView, Text, Pressable, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import { PageHeader } from "../../components/ui/PageHeader";
import { TipCard } from "../../components/ui/TipCard";

type LinkCardProps = {
  title: string;
  url: string;
  icon: keyof typeof Ionicons.glyphMap;
  delay: number;
};

function LinkCard({ title, url, icon, delay }: LinkCardProps) {
  return (
    <Animated.View entering={FadeInDown.delay(delay).duration(600).springify()}>
      <Pressable 
        onPress={() => Linking.openURL(url)}
        className="flex-row items-center bg-slate-900 border border-slate-800 p-4 rounded-xl mb-4 active:bg-slate-800"
      >
        <View className="w-10 h-10 rounded-full bg-fuchsia-500/20 items-center justify-center mr-4">
          <Ionicons name={icon} size={20} color="#e879f9" />
        </View>
        <View className="flex-1">
          <Text className="text-white font-outfit-bold text-lg">{title}</Text>
          <Text className="text-slate-400 font-outfit text-sm" numberOfLines={1}>{url}</Text>
        </View>
        <Ionicons name="open-outline" size={20} color="#94a3b8" />
      </Pressable>
    </Animated.View>
  );
}

export default function RecursosScreen() {
  return (
    <View className="flex-1 bg-slate-950">
      <LinearGradient
        colors={['rgba(217, 70, 239, 0.15)', 'transparent']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 400 }}
      />
      <SafeAreaView edges={["top", "left", "right"]} className="flex-1">
        <ScrollView contentContainerClassName="p-6">
          <PageHeader 
            title="Bibliografía"
            subtitle="Recursos y enlaces oficiales para profundizar en las tecnologías utilizadas en este Starter-Kit."
            iconName="library"
          />

          <TipCard 
            title="Importante"
            message="Si tienes dudas sobre componentes, estilos o navegación, la documentación oficial es tu mejor amiga."
            delay={100}
            type="info"
          />

          <View className="mt-4">
            <LinkCard 
              title="Expo SDK"
              url="https://docs.expo.dev/"
              icon="cube"
              delay={200}
            />
            <LinkCard 
              title="NativeWind (Tailwind)"
              url="https://www.nativewind.dev/"
              icon="color-palette"
              delay={300}
            />
            <LinkCard 
              title="Expo Router"
              url="https://docs.expo.dev/router/introduction/"
              icon="navigate"
              delay={400}
            />
            <LinkCard 
              title="React Native"
              url="https://reactnative.dev/"
              icon="logo-react"
              delay={500}
            />
            <LinkCard 
              title="Tailwind CSS Docs"
              url="https://tailwindcss.com/docs"
              icon="book"
              delay={600}
            />
          </View>
          
          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
