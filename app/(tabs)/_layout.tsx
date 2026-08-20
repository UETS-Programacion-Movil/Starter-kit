import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0F172A", // Dark Navy
          borderTopWidth: 1,
          borderTopColor: "#1E293B", // Lighter slate for border
          height: 60 + insets.bottom,
          paddingBottom: 8 + insets.bottom,
          paddingTop: 8,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        tabBarActiveTintColor: "#00FFCC", // Neon Cyan
        tabBarInactiveTintColor: "#64748B", // Slate 500
        tabBarLabelStyle: {
          fontFamily: "Outfit_600SemiBold",
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "1. Clonar",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "download" : "download-outline"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="nativewind"
        options={{
          title: "2. NativeWind",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "color-palette" : "color-palette-outline"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tunnel"
        options={{
          title: "3. Tunnel",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "globe" : "globe-outline"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reset"
        options={{
          title: "4. Reset",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "refresh" : "refresh-outline"} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
