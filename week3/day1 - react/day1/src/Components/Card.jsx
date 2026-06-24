function Card(props) {
  return (
    <div style={{ border: "1px solid red", padding: "20px", margin: "20px" }}>
      <img src={props.image} style={{ borderRadius: "50%" }} alt="" />
      <h3>Name : {props.name} </h3>
      <h2> Id: {props.id}</h2>
      <p>Hobby: {props.hobby[0]} </p>
      <button>{props.text}</button>
    </div>
  );
}

export default Card;
