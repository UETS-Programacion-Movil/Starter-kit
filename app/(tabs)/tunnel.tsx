import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { PageHeader } from "../../components/ui/PageHeader";
import { CodeBlock } from "../../components/ui/CodeBlock";
import { TipCard } from "../../components/ui/TipCard";

export default function TunnelScreen() {
  return (
    <View className="flex-1 bg-slate-950">
      <LinearGradient
        colors={['rgba(56, 189, 248, 0.15)', 'transparent']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 400 }}
      />
      <SafeAreaView edges={["top", "left", "right"]} className="flex-1">
        <ScrollView contentContainerClassName="p-6">
          <PageHeader 
            title="Modo Tunnel"
            subtitle="¿Tu universidad o red de trabajo bloquea los puertos? Usa el modo tunnel para ver la app en tu celular en cualquier red."
            iconName="globe"
          />

          <CodeBlock 
            filename="Terminal"
            code={`npx expo start --tunnel`}
            delay={100}
          />

          <TipCard 
            title="Instalación de ngrok"
            message="Si es la primera vez que usas --tunnel, es posible que Expo te pida instalar @expo/ngrok globalmente. Simplemente presiona la tecla 'y' para aceptar."
            delay={200}
            type="info"
          />

          <TipCard 
            title="Rendimiento"
            message="El modo tunnel es un poco más lento para recargar los cambios (Hot Reloading) comparado con estar en la misma red LAN."
            delay={300}
            type="warning"
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
