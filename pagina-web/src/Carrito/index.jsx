import { useEffect } from "react";
import CarritoItem from "../carritoItems";

const Carrito = ({ cartItems = [], cartTotal }) => {
  return (
    <div className="carrito">
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="container-lista-carrito">
          <ul className="lista-carrito">
            {cartItems.map((item) => (
              <CarritoItem
                key={item.id}
                id={item.id}
                nameProduct={item.nameProduct}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
          </ul>
          <p>Total: ${cartTotal}</p>
        </div>
      )}
    </div>
  );
};

export default Carrito;
