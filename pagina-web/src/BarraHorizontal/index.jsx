import Carrito from "../Carrito";
import React from "react";

const Horizontal = ({
  userName,
  urlimagen,
  isCartOpen,
  toggleCart,
  removeProduct,
  products,
  handleLogOut,

  showButton,
  toggleButton,
}) => {
  const calculateCartTotal = () => {
    return products.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  return (
    <nav className="navHorizontal">
      <div className="contenedor-horizontal">
        <p className="name">{userName}</p>
        <img
          className="usuario"
          src={urlimagen}
          alt="usuario"
          onClick={toggleButton}
        />
        {showButton && (
          <div className="user-message">
            <button className="btn-logout" onClick={handleLogOut}>
              {" "}
              Log Out
            </button>
          </div>
        )}
        {products.length >= 0 && (
          <div className="carrito-icon" onClick={toggleCart}>
            <p className="texto-carrito">
              <span className="material-symbols-outlined">shopping_cart</span>
              <strong className="Numero-carrito">{products.length}</strong>
            </p>
          </div>
        )}
        {isCartOpen && (
          <Carrito
            cartItems={products}
            cartTotal={calculateCartTotal()}
            removeProduct={removeProduct}
          />
        )}
      </div>
    </nav>
  );
};

export default Horizontal;
