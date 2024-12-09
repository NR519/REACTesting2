import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import AboutScreen from './AboutScreen';
import HobiScreen from './HobiScreen';
import HouseScreen from './HomeScreen';

// Prevent splash screen from auto-hiding before fonts are loaded
SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme(); // Mendapatkan skema warna (light/dark)
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        // Memuat font menggunakan Font.loadAsync
        await Font.loadAsync({
          SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading font:", error);
      }
    };
    
    loadFonts();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Menyembunyikan Splash Screen setelah font dimuat
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Tunggu sampai font dimuat
  }

  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HouseScreen} />
          <Drawer.Screen name="About" component={AboutScreen} />
          <Drawer.Screen name="Hobby" component={HobiScreen} />
        </Drawer.Navigator>
    </ThemeProvider>
  );
}
