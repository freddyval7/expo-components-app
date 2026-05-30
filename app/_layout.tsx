import "react-native-reanimated";

import { allRoutes } from "@/constants/Routes";
import { useThemeColor } from "@/hooks/use-theme-color";
import { ThemeChangerProvider } from "@/presentation/context/ThemeChangerContext";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <ThemeChangerProvider>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: backgroundColor,
          },
          headerStyle: {
            backgroundColor: backgroundColor,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "",
          }}
        />
        {allRoutes.map((route) => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            options={{
              title: route.title,
              headerShown: !route.title.includes("Slides"),
            }}
          />
        ))}
      </Stack>
    </ThemeChangerProvider>
  );
}
