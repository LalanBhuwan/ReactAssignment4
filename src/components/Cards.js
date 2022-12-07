import "./Cards.css";
const Cards = (props) => {
  const styling = {
    backgroundColor: props.color,
    height: "15rem",
    width: "10rem"
  };

  return (
    <>
      <div style={styling} className="main-container">
        <div className="container  text-container">{props.colorCode}</div>
        <h5 style={{color: props.color}}>{props.title}</h5>
      </div>
    </>
  );
};
export default Cards;
