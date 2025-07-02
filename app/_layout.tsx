import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { Colors } from '@/constants/Colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: Colors.light.background },
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen name="doctors" />
                <Stack.Screen name="about" />
                <Stack.Screen name="login" />
            </Stack>
        </SafeAreaProvider>
    );
}
