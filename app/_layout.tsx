import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import COLORS from "@/constants/public/COLORS";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    SfProVision: require("../assets/fonts/FontsFree-Net-SFProDisplay-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="index">
        <Stack.Screen
          name="index"
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen
          name="home"
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen
          name="login/Login"
          options={{
            presentation: "modal",
            headerShown: true,
            headerTitle:'',
            headerStyle: {
              backgroundColor: COLORS.primary,
            },

            headerShadowVisible:false,
          }}
        />
        <Stack.Screen
          name="signUp/SignUp"
          options={{
            presentation: "modal",
            headerShown: true,
            headerTitle:'',
            headerStyle: {
              backgroundColor: COLORS.primary,
            },

            headerShadowVisible:false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
