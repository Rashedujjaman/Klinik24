import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2024 Doctors List. All rights reserved.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#f8f8f8',
        paddingVertical: 16,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    footerText: {
        color: '#888',
        fontSize: 14,
    },
});