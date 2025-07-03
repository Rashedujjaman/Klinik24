import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '../constants/Colors';

export default function Footer() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    return (
        <View style={[styles.footerContainer, { paddingHorizontal: isMobile ? 20 : 165  }]}>
            {/* Footer Columns */}
            <View style={styles.footerColumns}>
                <View style={styles.column}>
                    <View style={styles.logoContainer}>
                        <Text style={styles.logoText}>
                            Klinik 24.
                        </Text>

                        <LinearGradient
                            colors={['#4A6CF7', '#67B8F7']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.plusCircle}
                        >
                            <AntDesign name="plus" style={styles.plusText} color="black" />
                        </LinearGradient>
                    </View>
                    <Text style={styles.text}>Jl. Lebak Bulus I Kav. 29 Cilandak</Text>
                    <Text style={styles.text}>Jakarta Selatan, DKI Jakarta, Indonesia 12340</Text>
                    <View style={styles.socialIcons}>
                        <TouchableOpacity>
                            <FontAwesome name="youtube" size={24} color={Colors.light.background} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="facebook" size={24} color={Colors.light.background} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <FontAwesome name="whatsapp" size={24} color={Colors.light.background} style={styles.icon} />
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Company Info */}
                <View style={styles.column}>
                    <Text style={styles.columnTitle}>Company Info</Text>
                    <TouchableOpacity><Text style={styles.link}>Tentang Kami</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.link}>Karir</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.link}>Blog</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.link}>Info Layanan</Text></TouchableOpacity>
                </View>

                {/* Cabang */}
                <View style={styles.column}>
                    <Text style={styles.columnTitle}>Cabang</Text>
                    <Text style={styles.text}>Tangerang</Text>
                    <Text style={styles.text}>Jakarta</Text>
                    <Text style={styles.text}>Surabaya</Text>
                    <Text style={styles.text}>Bekasi</Text>
                </View>

                {/* Kontak Kami */}
                <View style={styles.column}>
                    <Text style={styles.columnTitle}>Kontak Kami</Text>
                    <Text style={styles.text}>+626564465455</Text>
                    <Text style={styles.text}>info@klinik24.com</Text>
                    <Text style={styles.text}>Telp: +5646544654</Text>
                </View>
            </View>

            <Text style={styles.copyright}>Copyright © Klinik24 2022</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: Colors.light.footer,
        paddingVertical: 40,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },

    logoContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',
    },
    logoText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.light.background,
    },
    plusCircle: {
        position: 'absolute',
        right: -10,
        top: -10,
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    plusText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },


    logoSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 120,
        height: 40,
    },
    socialIcons: {
        flexDirection: 'row',
        gap: 20,
    },
    icon: {
        padding: 8,
    },
    footerColumns: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 20,
        marginBottom: 30,
    },
    column: {
        minWidth: 150,
        marginBottom: 20,
    },
    columnTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.light.background,
        marginBottom: 15,
    },
    link: {
        fontSize: 14,
        color: Colors.light.background,
        marginBottom: 10,
    },
    text: {
        fontSize: 14,
        color: Colors.light.background,
        marginBottom: 8,
        lineHeight: 20,
    },
    copyright: {
        textAlign: 'center',
        color: Colors.light.background,
        fontSize: 12,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingTop: 20,
    },
});