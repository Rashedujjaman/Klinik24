import { Image, Text, View, StyleSheet, useWindowDimensions} from 'react-native';

export default function PartnerSection() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    const images = [
        require('../assets/images/img1.png'),
        require('../assets/images/img2.png'),
        require('../assets/images/img3.png'),
        require('../assets/images/img4.png'),
        require('../assets/images/img5.png')
    ]
    return (
        <View style={[styles.container, { flexDirection: 'column' }]}>
            <Text style={styles.title}>Partner & Friend</Text>

            <View style={[styles.imageContainer, { flexDirection: isMobile? 'column': 'row' }]}>
                {images.map((imgSrc, idx) => (
                    <Image
                        key={idx}
                        source={imgSrc}
                        resizeMode="contain"
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        backgroundColor: '#e2edff',
        paddingVertical: 30,
        paddingHorizontal: 10,
        gap: 20,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#031432',
        fontFamily: 'Poppins',
        textAlign: 'center',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 40,
    },
});
