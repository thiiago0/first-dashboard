import React, { useState, useEffect } from "react";
import Carrito from "../Carrito";
import Producto from "../Producto";
import { useAddDeleteCar } from "../hooks/useAddDeleteCar";
import { useToggleIsOpen } from "../hooks/useToggleIsOpen";

const Horizontal = ({ userName, urlimagen, isCartOpen, toggleCart }) => {
  const { newProduct } = useAddDeleteCar();

  const calculateCartTotal = () => {
    return newProduct.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  return (
    <nav className="navHorizontal">
      <div className="contenedor-horizontal">
        <p className="name">{userName}</p>
        <img className="usuario" src={urlimagen} alt="usuario" />
        {newProduct.length > 0 && (
          <div className="carrito-icon" onClick={toggleCart}>
            <p className="texto-carrito">
              <span className="material-symbols-outlined">shopping_cart</span>
              <strong className="Numero-carrito">{newProduct.length}</strong>
            </p>
          </div>
        )}
        {isCartOpen && (
          <Carrito cartItems={newProduct} cartTotal={calculateCartTotal()} />
        )}
      </div>
    </nav>
  );
};

export default Horizontal;
