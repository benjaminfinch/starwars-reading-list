import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Card = ({ name, children, id, entity, element }) => {
  const { store, actions } = useContext(Context);
  const isFavorite = store.favorites.find((el) => el.id === element.id && el.entity === element.entity) ? true : false;

  return (
    <div className="card text-start flex-shrink-0 me-4 mb-4" style={{ width: "18rem" }}>
      <div style={{ width: '100%', height: '200px', background: 'black' }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {children}
        <div className="d-flex justify-content-between">
          <a href={`/${entity}/${id}`} className="btn bg-warning btn-outline-black">
            Learn more!
          </a>
          <button
            type="button"
            className="btn btn-outline-black"
            onClick={() => {
              if (!isFavorite) actions.addFavorite(element);
              else actions.removeFavorite(element);
            }}
          >
            {!isFavorite ? (<FontAwesomeIcon icon={faHeart} />) : (<FontAwesomeIcon icon={faHeartSolid} />)}
          </button>
        </div>
      </div>
    </div>
  )
};

export default Card;