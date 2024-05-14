import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-black mb-3 px-4">
      <a class="navbar-brand" href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
          alt="Star Wars"
          width="60"
          height="40"
        />
      </a>
      <div className="ml-auto">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-warning dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            likes {store.favorites.length}
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            {store.favorites.map((element) => (
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <a class="dropdown-item" href={`${element.entity}/${element.id}`}>
                  {element.name}
                </a>
                <button
                  style={{ border: 'none', outline: 'none', background: 'none' }}
                  onClick={() => {
                    actions.removeFavorite(element);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
            {store.favorites.length === 0 && (
              <li className="text-center">
                (none)
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
