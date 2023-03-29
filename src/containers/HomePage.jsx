import Home from "../components/templates/Home";
import { ReactComponent as RocketIcon } from "../assets/Icons/rocket.svg";
import { ReactComponent as ChartIcon } from "../assets/Icons/chart.svg";
import { ReactComponent as DiamondIcon } from "../assets/Icons/diamond.svg";

const HomePage = () => {
  const heroContent = {
    subHeading: "Welcome to OOTU",
    main: "Here all you need to explode you business",
    secondary: "Experienced team ready for you",
    mainBtn: { text: "Go with us", path: "#" },
    secondaryBtn: { text: "Learn more", path: "#" },
  };

  const whyUs = [
    {
      title: "First Working Prosses",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, odit dolorem recusandae earum ipsam fugiat accusamus aliquid repellendus minus? Minus?",
      icon: <RocketIcon />,
    },
    {
      title: "High-End Analizing",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, odit dolorem recusandae earum ipsam fugiat accusamus aliquid repellendus minus? Minus?",
      icon: <ChartIcon />,
    },
    {
      title: "Dedicate Team",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, odit dolorem recusandae earum ipsam fugiat accusamus aliquid repellendus minus? Minus?",
      icon: <DiamondIcon />,
    },
  ];

  return <Home heroContent={heroContent} whyUs={whyUs} />;
};

export default HomePage;
