import React, { useEffect } from "react";
import { useAddDeleteCar } from "../hooks/useAddDeleteCar";

const CarritoItem = ({ id, nameProduct, quantity, price }) => {
  const { removeProduct } = useAddDeleteCar();

  return (
    <li className="lista-carrito-item" key={id}>
      {nameProduct} - Cantidad: {quantity} - Subtotal: ${quantity * price}
      <button
        className="btn-eliminar"
        type="button"
        onClick={() => removeProduct(id)}
      >
        <label className="menos">-</label>
      </button>
    </li>
  );
};

export default CarritoItem;
