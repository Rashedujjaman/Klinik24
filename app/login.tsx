import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login to Klinik24</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: Colors.light.background,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        color: Colors.light.text,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: Colors.light.border,
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    button: {
        backgroundColor: Colors.light.primary,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.light.background,
        fontWeight: 'bold',
        fontSize: 16,
    },
});