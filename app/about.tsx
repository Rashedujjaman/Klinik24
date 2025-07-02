import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import { Colors } from '../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
            <View style={styles.container}>
                <NavBar />
                <Text style={styles.title}>About Klinik24</Text>
                <Text style={styles.text}>
                    We provide quality healthcare services...
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: Colors.light.text,
    },
    text: {
        fontSize: 16,
        color: Colors.light.text,
        lineHeight: 24,
    },
});