import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { PageHeader } from "../../components/ui/PageHeader";
import { CodeBlock } from "../../components/ui/CodeBlock";
import { TipCard } from "../../components/ui/TipCard";

export default function CloneScreen() {
  return (
    <View className="flex-1 bg-slate-950">
      <LinearGradient
        colors={['rgba(16, 185, 129, 0.15)', 'transparent']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 400 }}
      />
      <SafeAreaView edges={["top", "left", "right"]} className="flex-1">
        <ScrollView contentContainerClassName="p-6">
          <PageHeader 
            title="Clonar App"
            subtitle="Para empezar a trabajar con el starter kit, primero debes clonarlo desde el repositorio oficial y descargar sus dependencias."
            iconName="download"
          />

          <CodeBlock 
            filename="Terminal"
            code={`git clone https://github.com/tu-usuario/pm-starter-kit.git\ncd pm-starter-kit`}
            delay={100}
          />

          <View className="h-4" />

          <CodeBlock 
            filename="Instalar dependencias"
            code={`npm install`}
            delay={200}
          />

          <TipCard 
            title="Batería Incluida"
            message="Este starter kit ya viene con Expo SDK 54, React Native Navigation y NativeWind v4 preconfigurados. ¡Listo para usar!"
            delay={300}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
