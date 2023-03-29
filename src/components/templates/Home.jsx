import HeroSection from "../organisms/HeroSection";
import WhyUs from "../organisms/WhyUs";

const Home = ({ heroContent, experiences }) => {
  return (
    <>
      <HeroSection heroContent={heroContent} />
      <WhyUs />
    </>
  );
};

export default Home;
