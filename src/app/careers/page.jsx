import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import CareersOpportunities from '../../components/CareersOpportunities';
import CareersBenefits from '../../components/CareersBenefits';
import CareersCurrentOpenings from '../../components/CareersCurrentOpenings';
export default function Careers() {
  return (
    <main>
      <Header />
      <HeroSection 
       title="Careers"
       subtitle=""
      />
      <CareersOpportunities/>
      <CareersBenefits/>
      <CareersCurrentOpenings/>
      <Footer />
    </main>
  );
}