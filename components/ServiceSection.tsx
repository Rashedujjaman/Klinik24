import { Image, Text, View, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const services = [
    {
        icon: require('../assets/images/012-medicine.png'),
        color: '#855FCE',
        title: '24-Hour Pharmacy',
        description: "A shop that prepares and sells medicines based on doctors' prescriptions and also trades medical supplies.",
    },
    {
        icon: require('../assets/images/017-heart.png'),
        color: '#27AE60',
        title: 'Medical Check Up',
        description: "A shop that prepares and sells medicines based on doctors' prescriptions and also trades medical supplies.",
    },
    {
        icon: require('../assets/images/005-syringe.png'),
        color: '#2F80ED',
        title: 'Professional Doctor',
        description: "A shop that prepares and sells medicines based on doctors' prescriptions and also trades medical supplies.",
    },
];

export default function ServiceSection() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    return (
        <View style={[styles.container, { flexDirection: 'column', paddingHorizontal: isMobile ? 20 : 165 }]}>
            <View style={[styles.textContainer, { flexDirection: isMobile ? 'column' : 'row' }]}>
                <Text style={styles.title}>List of Services</Text>
                <Text style={styles.description}>
                    A hospital is an integral part of a social and health organization, serving the function of providing comprehensive (holistic) care.
                </Text>
            </View>
            <View style={[styles.cardsContainer, { flexDirection: isMobile ? 'column' : 'row' }]}>
                {services.map((service, idx) => (
                    <View key={idx} style={styles.card}>
                        <View style={[styles.iconCircle, { backgroundColor: `${service.color}1A` }]}>
                            <Image
                                source={service.icon}
                                style={styles.iconImage}
                            />
                        </View>
                        <Text style={styles.cardTitle}>{service.title}</Text>
                        <Text style={styles.cardDescription}>{service.description}</Text>
                        <LinearGradient
                            colors={['#4A6CF7', '#67B8F7']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            style={[styles.buttonContainer]}
                        >
                            <TouchableOpacity style={styles.whatsappButton}>
                                <FontAwesome name="whatsapp" size={24} color="#fff" />
                                <Text style={styles.whatsappButtonText}>Reservasi</Text>
                            </TouchableOpacity>

                        </LinearGradient>

                    </View>
                ))}
            </View>

            <View style={[{
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: isMobile ? 20 : 40,
            }]}>

                <View style={[{
                    width: isMobile ? '100%' : 523,
                    alignItems: isMobile ? 'center' : 'flex-start',
                    justifyContent: 'flex-start',
                    marginBottom: isMobile ? 20 : 0,
                    position: 'relative',
                }]}>
                    <Image
                        source={require('../assets/images/clicnic.png')}
                        style={{
                            width: isMobile ? 380 : 523,
                            height: isMobile ? 294 : 405,
                            resizeMode: 'contain',
                        }}
                    />


                    <View style={styles.reviewContainer}>
                        <View style={styles.reviewIconCircle}>
                            <Image source={require('../assets/images/013-care-2.png')}
                                style={{ width: 24, height: 24, resizeMode: 'contain' }}/>
                            </View>
                        <View style={styles.reviewContent}>

                            <Text style={styles.reviewTitle}>Quality over Quantity</Text>

                            <View style={styles.ratingContainer}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FontAwesome
                                        key={star}
                                        name="star"
                                        size={16}
                                        color="#FFD700"
                                        style={styles.starIcon}
                                    />
                                ))}
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[
                    { 
                        flex: 1, 
                        alignItems: isMobile ? 'center' : 'flex-start', 
                        justifyContent: 'center',
                        width: '100%',
                    }
                ]}>
                    <Text style={[{
                        fontSize: 32,
                        fontWeight: 'bold',
                        color: '#031432',
                        fontFamily: 'Poppins',
                        textAlign: isMobile ? 'center' : 'left',
                    }]}>
                        The best care from medical experts.
                    </Text>
                    <Text style={[{
                        fontSize: 16,
                        color: Colors.light.text,
                        marginTop: 10,
                        textAlign: isMobile ? 'center' : 'justify',
                    }]}>
                        A hospital is an integral part of a social and health organization, functioning to provide comprehensive (holistic) services.
                    </Text>
                    <LinearGradient
                        colors={['#4A6CF7', '#67B8F7']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[styles.buttonContainer, { alignSelf: isMobile ? 'center' : 'flex-start', width: isMobile ? 180 : 200 }]}
                    >
                        <TouchableOpacity style={styles.whatsappButton}>
                            <FontAwesome name="whatsapp" size={24} color="#fff" />
                            <Text style={styles.whatsappButtonText}>Reservasi</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
        gap: 20,
    },
    textContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        flex: 2,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#031432',
        fontFamily: 'Poppins',
        textAlign: 'left'
    },
    description: {
        flex: 3,
        fontSize: 16,
        color: Colors.light.text,
        textAlign: 'justify',
        marginTop: 10,
    },
    cardsContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 32,
        alignItems: 'flex-start',
        width: 346,
        height: 361,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        marginBottom: 10,
    },
    iconCircle: {
        width: 80,
        height: 80,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    iconImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },


    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#031432',
        marginBottom: 14,
        textAlign: 'center',
    },
    cardDescription: {
        fontSize: 14,
        color: Colors.light.text,
        marginBottom: 16,
        textAlign: 'left',
    },
    buttonContainer: {
        borderRadius: 50,
        width: '100%',
        marginTop: 30,
    },
    whatsappButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        justifyContent: 'center',
        gap: 16,
    },
    whatsappButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholder: {
        fontSize: 18,
        color: '#888',
    },

    clicnicImage: {
        height: 405,
        width: 523,
    },
    reviewContainer: {
        position: 'absolute',
        height: 70,
        width: 251,
        bottom: 60,
        right: -20,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        flex: 1,
        flexDirection: 'row',
        gap: 16,
    },

    reviewContent: {
        flex: 1,
        justifyContent: 'space-between',
        gap: 2,
    },
    reviewIconCircle: {
        width: 32,
        height: 32,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4A6CF7',
    },

    reviewTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '0000',
    },

    ratingContainer: {
        flexDirection: 'row',
    },

    starIcon: {
        marginRight: 4,
    },
});