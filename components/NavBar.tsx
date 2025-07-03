import { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons} from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function NavBar() {
    const [expanded, setExpanded] = useState(false);
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <View style={styles.wrapper}>
            {/* Top Navbar */}
            <View style={[styles.navbar, { justifyContent: isMobile ? 'space-between' : 'flex-start', paddingHorizontal: isMobile ? 20 : 165 }]}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>
                        Klinik <Text style={styles.logoHighlight}>24.</Text>
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

                {isMobile ? (
                    <TouchableOpacity onPress={() => setExpanded(prev => !prev)} style={styles.hamburger}>
                        <Ionicons name={expanded ? 'close' : 'menu'} size={28} color={Colors.light.text} />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.inlineLinks}>
                        <NavLinks />
                    </View>
                )}
            </View>

            {/* Expanded Nav Items Below (Mobile Only) */}
            {isMobile && expanded && (
                <View style={styles.expandedLinks}>
                    <NavLinks onPress={() => setExpanded(false)} />
                </View>
            )}
        </View>
    );
}

function NavLinks({ onPress }: { onPress?: () => void }) {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    return (
        <>
            <Link href="/" asChild>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.navLink}>Home</Text>
                </TouchableOpacity>
            </Link>
            <Link href="/doctors" asChild>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.navLink}>Doctors</Text>
                </TouchableOpacity>
            </Link>
            <Link href="/about" asChild>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.navLink}>About</Text>
                </TouchableOpacity>
            </Link>
            <LinearGradient
                colors={['#4A6CF7', '#67B8F7']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={[styles.loginButton, { marginLeft: isMobile ? 0 : 100  }]}
            >
                <Link href="/" asChild>
                    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
                        <Image source={require('../assets/images/pasient.png')} ></Image>
                        <Text style={styles.loginText}>Register/Login</Text>
                    </TouchableOpacity>
                </Link>
            </LinearGradient>

        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.light.background,
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        gap: 100,
    },
    logoContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4A6CF7',
    },
    logoHighlight: {
        color: '#4A6CF7',
    },
    plusCircle: {
        position: 'absolute',
        right: -25,
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
    hamburger: {
        padding: 4,
    },
    inlineLinks: {
        flexDirection: 'row',
        gap: 40,
        alignItems: 'center',
    },
    expandedLinks: {
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingBottom: 12,
        gap: 12,
        backgroundColor: Colors.light.background,
    },
    navLink: {
        fontSize: 18,
        color: Colors.light.text,
    },

    loginButton: {
        flexDirection: 'row',
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 50,
    },
    loginText: {
        color: Colors.light.background,
        fontWeight: 'bold',
        fontSize: 18,
    },
});
