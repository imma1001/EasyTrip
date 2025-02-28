import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { DataProvider } from '@/constants/Context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Italic: require('../assets/fonts/Lora-Italic-VariableFont_wght.ttf'),
    SemiBold: require('../assets/fonts/Lora-SemiBold.ttf'),
    SemiBoldItalic: require('../assets/fonts/Lora-SemiBoldItalic.ttf'),
    SpicyRice: require('../assets/fonts/SpicyRice-Regular.ttf'),
    MediumItalic: require('../assets/fonts/Lora-MediumItalic.ttf'),
    Lime: require('../assets/fonts/Limelight-Regular.ttf'),
    Montbold: require('../assets/fonts/Montserrat-Bold.ttf'),
    Montmedium: require('../assets/fonts/Montserrat-Medium.ttf'),
    Montthin: require('../assets/fonts/Montserrat-Thin.ttf'),

  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <DataProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      </DataProvider>
    </ThemeProvider>
  );
}
