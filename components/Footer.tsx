import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '../constants/Colors';

export default function Footer() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <View style={[styles.footerContainer, { paddingHorizontal: isMobile ? 20 : 165 }]}>
            {/* Footer Columns */}
            <View style={[styles.footerColumns, {
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? 30 : 20
            }]}>
                {/* First Column - Logo and Address */}
                <View style={[styles.column, { alignItems: isMobile ? 'center' : 'flex-start', width: isMobile ? '100%' : '30%' }]}>
                    <View style={[styles.logoContainer, {
                        justifyContent: isMobile ? 'center' : 'flex-start',
                        marginBottom: isMobile ? 20 : 0
                    }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.logoText}>Klinik 24.</Text>
                            <LinearGradient
                                colors={['#4A6CF7', '#67B8F7']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.plusCircle}
                            >
                                <AntDesign name="plus" style={styles.plusText} color="white" />
                            </LinearGradient>
                        </View>

                    </View>
                    <Text style={styles.text}>Jl. Lebak Bulus I Kav. 29 Cilandak</Text>
                    <Text style={styles.text}>Jakarta Selatan, DKI Jakarta, Indonesia 12340</Text>
                    <View style={[styles.socialIcons, { justifyContent: isMobile ? 'center' : 'flex-start' }]}>
                        <TouchableOpacity >
                            <FontAwesome name="youtube" size={20} color={Colors.light.background} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <FontAwesome name="facebook" size={20} color={Colors.light.background} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <FontAwesome name="whatsapp" size={20} color={Colors.light.background} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Company Info */}
                <View style={[styles.column, { alignItems: isMobile ? 'center' : 'flex-start', width: isMobile ? '100%' : '20%' }]}>
                    <Text style={styles.columnTitle}>Company Info</Text>
                    <TouchableOpacity><Text style={styles.link}>Tentang Kami</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.link}>Karir</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.link}>Blog</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.link}>Info Layanan</Text></TouchableOpacity>
                </View>

                {/* Cabang */}
                <View style={[styles.column, { alignItems: isMobile ? 'center' : 'flex-start', width: isMobile ? '100%' : '20%' }]}>
                    <Text style={styles.columnTitle}>Cabang</Text>
                    <Text style={styles.text}>Tangerang</Text>
                    <Text style={styles.text}>Jakarta</Text>
                    <Text style={styles.text}>Surabaya</Text>
                    <Text style={styles.text}>Bekasi</Text>
                </View>

                {/* Kontak Kami */}
                <View style={[styles.column, { alignItems: isMobile ? 'center' : 'flex-start', width: isMobile ? '100%' : '20%' }]}>
                    <Text style={styles.columnTitle}>Kontak Kami</Text>
                    <Text style={styles.text}>+626564465455</Text>
                    <Text style={styles.text}>info@klinik24.com</Text>
                    <Text style={styles.text}>Telp: +5646544654</Text>
                </View>
            </View>

            {/* Copyright */}
            <Text style={[styles.copyright, { marginTop: isMobile ? 20 : 40 }]}>Copyright © Klinik24 2022</Text>
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
    footerColumns: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    column: {
        marginBottom: 30,
    },
    logoContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.light.background,
    },
    plusCircle: {
        position: 'absolute',
        left: 130,
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
        fontSize: 14,
        fontWeight: 'bold',
    },
    socialIcons: {
        flexDirection: 'row',
        gap: 15,
        marginTop: 20,
    },
    icon: {
        padding: 5,
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
        marginBottom: 12,
        lineHeight: 20,
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
        borderTopColor: 'rgba(255,255,255,0.2)',
        paddingTop: 20,
    },
});