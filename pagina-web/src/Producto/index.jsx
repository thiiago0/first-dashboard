import React from "react";
import "./styles.css";
// import nike from "../assets/Imagen/nike.png";
let a = "id_1222_a";
let b = "id_1222_b";
let c = "id_1222_c";

const Producto = () => {
  const data = [
    {
      id: a,
      nameProduct: "nike",
      price: "110",
      descripcion: "tenis export aptos para hacer ejercicio",
      img: "./src/assets/Imagen/nike.png",
    },
    {
      id: b,
      nameProduct: "puma",
      price: "120",
      descripcion: "comodos, flexibles para uso diario",
      img: "./src/assets/Imagen/puma.webp",
    },
    {
      id: c,
      nameProduct: "adidas",
      price: "115",
      descripcion:
        "no tenemos competencia cuando se trata de confort y estilo.",
      img: "./src/assets/Imagen/adidas.jpeg",
    },
  ];
  // data.map((product, i) =>(product, `${i}`))
  return (
    <div className="container-items">
      {data.map(({ id, nameProduct, price, descripcion, img }) => (
        //const { id, nameProduct, price, descripcion, img } = producto;
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
            <button className="btn-comprar">comprar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Producto;
