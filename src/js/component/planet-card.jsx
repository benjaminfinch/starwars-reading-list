import React from "react";
import Card from "./card.jsx"
import "../../styles/home.css";

const PlanetCard = ({ name, population, terrain, id }) => {
  const entity = "planet_details";
  return(
    <Card name={name} id={id} entity={entity} element={{ entity, name, id }}>
      <p className="card-text">Population: {population}</p>
      <p className="card-text overflow-hidden">Terrain: {terrain}</p>
    </Card>
  )
};

export default PlanetCard;
