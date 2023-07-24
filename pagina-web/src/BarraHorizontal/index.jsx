import React from "react";

const Horizontal = ({ userName, urlimagen }) => {
  return (
    <nav className="navHorizontal">
      <div className="contenedor-horizontal">
        <p className="name">{userName}</p>
        <img className="usuario" src={urlimagen} alt="usuario" />
      </div>
    </nav>
  );
};

export default Horizontal;
