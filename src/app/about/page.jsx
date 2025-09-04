import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import AboutIntro from '../../components/AboutIntro';
import AboutPartners from '../../components/AboutPartners';
export default function About() {
  return (
    <main>
      <Header />
      <HeroSection 
       title="About Us"
       subtitle=""
      />
      <AboutIntro/>
      <AboutPartners/>
      {/* White spacer */}
<div className="bg-white h-16 sm:h-24"></div>
      <Footer />
    </main>
  );
}