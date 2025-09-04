import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SolarOverview from '../components/SolarOverview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection 
       title="United Solar Energy SL (Pvt) Ltd"
       subtitle="Solar Project"
      />
      <SolarOverview />
      <Footer />
    </main>
  );
}
