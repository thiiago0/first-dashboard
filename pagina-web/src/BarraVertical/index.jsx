import React from "react";
import { Link } from "react-router-dom";

export const BarraVertical = ({ menuOptions, Urlogo }) => {
  return (
    <aside className="contenedor-izq">
      <div className="picture">
        <img className="logo" src={Urlogo} alt="Logo" />
      </div>
      <div>
        <ul className="item-container">
          {menuOptions?.map((i) => (
            <li key={i.id}>
              <Link to={i.enlace}>
                <strong>{i.nombre}</strong>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
