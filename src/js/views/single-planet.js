import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [planet, setPlanet] = useState(null);

  const getPlanet = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.swapi.tech/api/planets/${params.theid}`
      );
      const data = await res.json();

      console.log(data.result.properties);
      setPlanet(data.result.properties);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlanet();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div style={{ width: "600px", height: "400px", background: "black" }} />
        <div style={{ width: "500px" }} className="text-center">
          <h2>{planet?.name}</h2>
          <p className="fw-semibold fs-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            consectetur libero quis lobortis convallis. Quisque elit est,
            faucibus et cursus vel, pretium eget justo. Fusce vestibulum dui
            quis urna gravida euismod. Suspendisse orci ligula, aliquet vel
            consequat sit amet, dapibus pharetra lorem. Duis euismod commodo
            orci at interdum. Nunc non feugiat massa.
          </p>
        </div>
      </div>

      <hr className="my-4 border-black border-2" />

      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Climate</th>
            <th scope="col">Population</th>
            <th scope="col">Orbital Period</th>
            <th scope="col">Rotation Period</th>
            <th scope="col">Diameter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{planet?.name}</td>
            <td>{planet?.climate}</td>
            <td>{planet?.population}</td>
            <td>{planet?.orbital_period}</td>
            <td>{planet?.rotation_period}</td>
            <td>{planet?.diameter}</td>
          </tr>
        </tbody>
      </table>

      <Link to="/">
        <span className="btn text-black bg-warning btn-sm" href="#" role="button">
          back home
        </span>
      </Link>
    </div>
  );
};
