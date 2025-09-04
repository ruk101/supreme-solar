import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import ContactFormSection from '../../components/ContactFormSection';
import ContactMapSection from '../../components/ContactMapSection';
export default function Contact() {
  return (
    <main>
      <Header />
      <HeroSection 
       title="Contact Us"
       subtitle=""
      />
      <ContactFormSection/>
      <ContactMapSection/>
      <Footer />
    </main>
  );
}