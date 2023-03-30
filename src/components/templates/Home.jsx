import HeroSection from "../organisms/HeroSection";
import WhyUs from "../organisms/WhyUs";

const Home = ({ heroContent, whyUs }) => {
  return (
    <>
      <HeroSection heroContent={heroContent} />
      <WhyUs whyUs={whyUs} />
    </>
  );
};

export default Home;
