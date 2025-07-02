import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import { Colors } from '../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DoctorsScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
            <View style={styles.container}>
                <NavBar />
                <Text style={styles.title}>Our Doctors</Text>
                {/* Doctor listings will go here */}
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
        textAlign: 'center',
        marginVertical: 20,
        color: Colors.light.text,
    },
});