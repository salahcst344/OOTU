import Home from "../components/templates/Home";
import planet1 from "../assets/services-planets/planet3.png";
import planet2 from "../assets/services-planets/planet4.png";
import planet3 from "../assets/services-planets/planet6.png";
import { ReactComponent as RocketIcon } from "../assets/Icons/rocket.svg";

const HomePage = () => {
  const heroContent = {
    subHeading: "Welcome to OOTU",
    main: "Here all you need to explode you business",
    secondary: "Experienced team ready for you",
    mainBtn: { text: "Go with us", icon: <RocketIcon />, path: "#" },
    secondaryBtn: { text: "Learn more", path: "#" },
  };

  const whyUs = [
    {
      title: "First Working Prosses",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, odit dolorem recusandae earum ipsam fugiat accusamus aliquid repellendus minus? Minus?",
      img: planet1,
    },
    {
      title: "High-End Analizing",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, odit dolorem recusandae earum ipsam fugiat accusamus aliquid repellendus minus? Minus?",
      img: planet2,
    },
    {
      title: "Dedicate Team",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, odit dolorem recusandae earum ipsam fugiat accusamus aliquid repellendus minus? Minus?",
      img: planet3,
    },
  ];

  return <Home heroContent={heroContent} whyUs={whyUs} />;
};

export default HomePage;
