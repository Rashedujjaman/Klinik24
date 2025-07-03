import { ScrollView, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import AdvertisementBanner from '../components/AdvertisementBanner';
import ServicesSection from '../components/ServiceSection';
import PartnersSection from '../components/PartnerSection';
import Footer from '../components/Footer';
import { Colors } from '../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
            <ScrollView style={styles.container}>
                <NavBar />
                <AdvertisementBanner />
                <PartnersSection />
                <ServicesSection />
                <Footer />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
});