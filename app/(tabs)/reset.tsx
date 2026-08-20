import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { PageHeader } from "../../components/ui/PageHeader";
import { CodeBlock } from "../../components/ui/CodeBlock";
import { TipCard } from "../../components/ui/TipCard";

export default function ResetScreen() {
  return (
    <View className="flex-1 bg-slate-950">
      <LinearGradient
        colors={['rgba(249, 115, 22, 0.15)', 'transparent']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 400 }}
      />
      <SafeAreaView edges={["top", "left", "right"]} className="flex-1">
        <ScrollView contentContainerClassName="p-6">
          <PageHeader 
            title="Reiniciar Proyecto"
            subtitle="Una vez que entiendas cómo está estructurado este starter kit, querrás empezar tu propio proyecto desde cero."
            iconName="refresh-circle"
          />

          <CodeBlock 
            filename="Terminal"
            code={`npm run reset-project`}
            delay={100}
          />

          <TipCard 
            title="¿Qué hace este comando?"
            message="Mueve esta guía interactiva a una carpeta llamada 'app-example' y crea una nueva carpeta 'app' completamente en blanco lista para que programes."
            delay={200}
            type="info"
          />

          <TipCard 
            title="Soporte para Tailwind"
            message="¡No te preocupes! El script está configurado para que el proyecto en blanco siga teniendo NativeWind (Tailwind CSS) funcionando perfectamente."
            delay={300}
            type="warning"
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
