import Home from "../components/templates/Home";

const HomePage = () => {
  const heroContent = {
    subHeading: "Welcome to OOTU",
    main: "Here all you need to explode you business",
    secondary: "Experienced team ready for you",
    mainBtn: "Go with us",
    secondaryBtn: "Learn more",
  };

  const experiences = [
    {
      number: "5K",
      title: "Jobs done",
    },
    {
      number: "15+",
      title: "Industry experience",
    },
    {
      number: "3.5K",
      title: "Clients",
    },
  ];

  return <Home heroContent={heroContent} experiences={experiences} />;
};

export default HomePage;
