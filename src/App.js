import Cards from "./components/Cards";

const App = () => {
  const colors = [
    { color: "#FF6663", colorCode: "#FF6663", title: "PINK" },

    {
      color: "#333333",
      colorCode: "#333333",
      title: "GRAY"
    },
    {
      color: "#000000",
      colorCode: "#000000",
      title: "BLACK"
    },
    {
      color: "#38BB14",
      colorCode: "#38BB14",
      title: "GREEN"
    },
    {
      color: "#C90B0B",
      colorCode: "#C90B0B",
      title: "RED"
    },
    {
      color: "#FF8000",
      colorCode: "#FF8000",
      title: "ORANGE"
    },
    {
      color: "#FFF500",
      colorCode: "#FFF500",
      title: "YELLOW"
    },

    {
      color: "#CCCCCC",
      colorCode: "#CCCCCC",
      title: "LIGHT GRAY"
    },
    {
      color: "#7E41A2",
      colorCode: "#7E41A2",
      title: "PURPLE"
    },
    {
      color: "#C14911",
      colorCode: "#C14911",
      title: "BROWN"
    }
  ];

  return (
    <div>
      {colors.map((item, idx) => {
        return (
          <Cards
            color={item.color}
            colorCode={item.colorCode}
            title={item.title}
            key={idx}
          />
        );
      })}
    </div>
  );
};
export default App;
