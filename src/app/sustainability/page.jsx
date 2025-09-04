import HeroSection from '../../components/HeroSection';
import InfoCardGrid from '../../components/InfoCardGrid';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const projectCards = [
  { title: '', description: 'This project aligns with United Nations Sustainable Development Goal 7, which aims to ensure access to affordable, reliable, sustainable, and modern energy for all.' },
  { title: '', description: 'From a local perspective, this project is fully aligned with Sri Lanka’s revised Nationally Determined Contributions (NDC), which target a 70% share of renewable energy by 2030 and carbon neutrality in power generation by 2050. In line with the National Energy Policy (2019), the project supports the transition to clean energy, moving away from coal-fired power plants and strengthening grid resilience. Furthermore, the project is endorsed by the Sri Lanka Sustainable Energy Authority\'s Plan (2021–2026) and the CEB’s Long-term Generation Expansion Plan (2023–2042), reinforcing the national goal of generating 70% of the country\'s electricity from renewable sources.' },
  { title: '', description: 'The project significantly boosts the share of renewable energy in the national electricity generation mix, adding 36.3% of the conditional power capacity targeted to the national grid by 2026. Additionally, the project contributes 18.1% towards achieving the target of 3,867 MW of renewable energy capacity specified under NDC for the Power Sector NDC Implementation Plan (Mitigation) by 2030.' },
  { title: '', description: 'The Project plays a crucial role in the development of northern Sri Lanka, a region that was severely affected by the 30-year civil war. Despite 15 years having passed since the end of the conflict, the area continues to struggle with economic recovery and achieving a higher standard of living. The benefits of this project can be outlined through its two main sub-projects:' },
  { title: 'Sub-Project 1 and Sub-Project 2', description: 'Sub-Project 1 encompasses the development of a 700 MW solar power plant, a 2,250 MWh energy storage system, and a 220 kV transmission line, supplying dispatchable electricity to the national grid as needed by the CEB. Sub-project 1 aims to secure 1,479 acre of land for 35 years to establish the solar park. Additionally, Sub-Project 1 includes the rehabilitation of the Mutkompan road, the construction of the Kudamuruddi Aru barrage, and the rehabilitation of the Kudamuruddi tank bund.' },
  { title: '', description: 'The construction of the Kudamuruddi Aru barrage and the rehabilitation of the Kudamuruddi tank will enhance water storage capacity and irrigation efficiency, leading to long-term benefits for agricultural productivity by increasing water availability for upland agriculture and boosting crop yields. Additionally, the construction of barrages and bunds will reduce salinity intrusion, improving the quality of agricultural land and groundwater, supporting the rehabilitation of salinity-affected lands, and promoting sustainable farming practices. These improvements in water storage and irrigation infrastructure will facilitate year-round farming activities, enabling continuous cultivation of vegetables and other crops, thereby contributing to food security and economic stability for local farmers.' },
  { title: '', description: 'The rehabilitation of the Poonakary Tank and the development of over 20,000 acres of agricultural land in the Northern Province of Sri Lanka offer numerous benefits to the region and its people. This project not only aligns with the national goals of ensuring energy security through renewable sources but also provides sustainable water management for agriculture, contributing to the long term development of the Northern Sri Lanka.' },
  { title: '', description: 'Sub-project 2 is dedicated to the rehabilitation of the separation bund between the Upper and Lower portions of the Poonakary tank. It also encompasses the rehabilitation of the Akkarayan tank and the construction of the Mandakal Aru barrage. All activities related to the augmentation of Poonakary tank, Kudamuruddi tank, and Akkarayan tank, including the installation of the Kudamuruddi Aru and Mandakal Aru barrages under Sub-projects 1 and 2, come at no cost to the Government of Sri Lanka.' }
];

export default function ProjectPage() {
  return (
    <main>
      <Header />
      <HeroSection title="Sustainability" subtitle="" />
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
