import HeroSection from "../organisms/HeroSection";
import WhyUsSection from "../organisms/WhyUsSection";

const Home = ({ heroContent, whyUs }) => {
  return (
    <>
      <HeroSection heroContent={heroContent} />
      <WhyUsSection whyUs={whyUs} />
    </>
  );
};

export default Home;
