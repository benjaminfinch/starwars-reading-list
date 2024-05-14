import React from "react";
import Card from "./card.jsx"
import "../../styles/home.css";

const VehicleCard = ({ name, model, vehicle_class, id }) => {
  const entity = "vehicle_details";
  return(
    <Card name={name} id={id} entity={entity} element={{ entity, name, id }}>
      <p className="card-text">Model: {model}</p>
      <p className="card-text overflow-hidden">Vehicle Class: {vehicle_class}</p>
    </Card>
  )
};

export default VehicleCard;
