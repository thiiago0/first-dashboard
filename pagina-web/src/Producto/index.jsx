import React from "react";
import "./styles.css";
// import nike from "../assets/Imagen/nike.png";
import { useAddDeleteCar } from "../hooks/useAddDeleteCar";

const Producto = () => {
  const data = [
    {
      id: 7,
      nameProduct: "nike",
      price: "110",
      descripcion: "tenis export aptos para hacer ejercicio",
      img: "./src/assets/Imagen/nike.png",
    },
    {
      id: 8,
      nameProduct: "puma",
      price: "120",
      descripcion: "comodos, flexibles para uso diario",
      img: "./src/assets/Imagen/puma.webp",
    },
    {
      id: 9,
      nameProduct: "adidas",
      price: "115",
      descripcion:
        "no tenemos competencia cuando se trata de confort y estilo.",
      img: "./src/assets/Imagen/adidas.jpeg",
    },
  ];

  const { addProduct } = useAddDeleteCar();

  return (
    <div className="container-items">
      {data.map(({ id, nameProduct, price, descripcion, img }) => (
        <div className="item" key={id}>
          <figure>
            <img className="img-card" src={img} alt={nameProduct} />
          </figure>
          <div className="info-product">
            <div className="texts-container">
              <h3>{nameProduct}</h3>
              <p className="descripcion">{descripcion}</p>
              <p className="price">${price}</p>
            </div>

            <button
              className="btn-comprar"
              onClick={() => addProduct({ id, nameProduct, price })}
            >
              add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Producto;
