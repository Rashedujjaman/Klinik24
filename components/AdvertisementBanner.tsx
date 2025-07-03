import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/Colors';

export default function AdvertisementBanner() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    return (
        <View style={[styles.bannerContainer, { flexDirection: isMobile ? 'column' : 'row', paddingHorizontal: isMobile ? 20 : 165 }]} >
            <View style={styles.column1 }>
                <Text style={styles.bannerHeadline}>Klinik 24 is ready to serve the public&apos;s concerns 24/7.</Text>
                <Text style={styles.bannerText}>A hospital is an integral part of a social and health organization, with the function of providing comprehensive services.</Text>
                <LinearGradient
                    colors={['#4A6CF7', '#67B8F7']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={[styles.button]}
                >

                        <TouchableOpacity style={styles.button}>
                            <Image source={require('../assets/images/pasient.png')} />
                            <Text style={styles.buttonText}>View Services</Text>
                        </TouchableOpacity>

                </LinearGradient>
            </View>
            <View style={styles.column2}>
                <Image
                    source={require('../assets/images/doctor.png')}
                    style={[styles.bannerImage, { height: isMobile ? 410 : 610, width: isMobile ? 320 : 480 }]}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bannerContainer: {
        width: '100%',
        paddingVertical: 20,
    },

    column1: {
        display: 'flex',
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 20,
        marginVertical: 10,
    },

    column2: {
        display: 'flex',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 10,
    },

    bannerHeadline: {
        color: '#3A8EF6',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'left',
        fontFamily: 'Poppins_600SemiBold',
    },

    bannerText: {
        color: '#6C87AE',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 10,
        fontFamily: 'Sora',
    },

    button: {
        flexDirection: 'row',
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 100,
    },
    buttonText: {
        color: Colors.light.background,
        fontWeight: 'bold',
        fontSize: 18,
    },
    bannerImage: {
        //width: 480,
        //height: 610,
        borderRadius: 10,
    },
});