import CarritoItem from "../carritoItems";

const Carrito = ({ removeProduct, cartItems = [], cartTotal }) => {
  console.log("Carrito: ", cartItems);
  return (
    <div className="carrito">
      <div className="container-lista-carrito">
        <ul className="lista-carrito">
          {cartItems.map((item) => (
            <CarritoItem
              key={item.id}
              id={item.id}
              nameProduct={item.nameProduct}
              quantity={item.quantity}
              price={item.price}
              removeProduct={removeProduct}
            />
          ))}
        </ul>
        {cartItems.length > 0 ? (
          <p>Total: ${cartTotal}</p>
        ) : (
          <p>Carrito vacío</p>
        )}
      </div>
    </div>
  );
};

export default Carrito;
