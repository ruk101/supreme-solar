import HeroSection from '../../components/HeroSection';
import InfoCardGrid from '../../components/InfoCardGrid';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const projectCards = [
  {
    title: '',
    description:
      'The 700 MW Solar Power Project in Kilinochchi, Sri Lanka, led by United Solar Energy S L (Private) Limited (USESL) and backed by SGH Capital LLC, is a transformative initiative that aims to significantly boost Sri Lanka’s renewable energy capacity. With a total investment of USD 1.7 billion, this project is a landmark development in the country\'s push towards energy independence and environmental sustainability.'
  },
  {
    title: '',
    description:
      'The project is designed to meet Sri Lanka’s growing energy needs by integrating 700 MW of solar power generation with a 2,250 MWh Battery Energy Storage System (BESS). Strategically located at the Poonakary Tank and its surrounding irrigation infrastructure, this project will utilize cutting-edge photovoltaic (PV) technology to produce 1,100 GWh of clean, renewable electricity annually, contributing to the national grid. The advanced BESS will ensure fully dispatchable power during peak hours, enhancing grid stability and efficiency.'
  },
  {
    title: '',
    description:
      'The project is more than just an energy solution; it embodies a long-term vision for economic development and community rehabilitation in Sri Lanka\'s Northern Province, a region historically affected by conflict. By reclaiming over 20,000 acres of farmland and revitalizing local infrastructure, the project will provide critical support for agriculture, education, healthcare, and rural development. It is expected to create over 2,000 direct jobs and generate significant economic activity in local markets, bringing sustainable prosperity to the region.'
  },
  {
    title: '',
    description:
      'Notably, the project will generate revenue through carbon trading with a target of one million tons, further solidifying its contribution to global climate goals. With a 25-year Power Purchase Agreement in place. the project promises stable returns. Additionally, the project has secured Cabinet approval and is now engaging globally reputed EPC contractor Waaree Energies (www.waaree.com) targeting commissioning by 4Q 2026.'
  },
  {
    title: '',
    description:
      'Scheduled to begin in November 2025 and complete by December 2027, this project represents a significant step in Sri Lanka’s transition to a cleaner, more secure energy future while offering substantial social and economic benefits to the region.'
  }
];


export default function ProjectPage() {
  return (
    <main>
      <Header />
      <HeroSection title="The Project" subtitle="" />
      <section className="bg-[#F6F8ED] py-16 px-4">
  <div className="max-w-7xl mx-auto flex flex-col gap-12">
    {projectCards.map((card, index) => (
      <InfoCardGrid
        key={index}
        title={card.title}
        description={card.description}
      />
    ))}
  </div>
</section>

      <Footer />
    </main>
  );
}
