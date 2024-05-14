import React from "react";
import Card from "../component/card.jsx"
import "../../styles/home.css";

const CharacterCard = ({ name, gender, hair, eye, id }) => {
  const entity = "single";
  return (
    <Card name={name} id={id} entity={entity} element={{ entity, name, id }}>
      <p className="card-text">Gender: {gender}</p>
      <p className="card-text">Hair Color: {hair}</p>
      <p className="card-text">Eye Color: {eye}</p>
    </Card>
  )
};

export default CharacterCard;
