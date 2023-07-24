import React from "react";

export const BarraVertical = ({ menuOptions, Urlogo }) => {
  return (
    <aside className="contenedor-izq">
      <div className="picture">
        <img className="logo" src={Urlogo} alt="Logo" />
      </div>
      <div>
        <ul className="item-container">
          {menuOptions?.map((i) => (
            <a key={i.id} href={i.enlace}>
              <li>
                <strong>{i.nombre}</strong>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </aside>
  );
};
