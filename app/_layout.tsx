import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

import { Text, View } from "react-native";
import "../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View className="bg-light-background dark:bg-dark-background">
        <Text className="text-3xl mt-10 text-light-text dark:text-dark-text">
          Hola Mundo
        </Text>
      </View>
    </ThemeProvider>
  );
}
