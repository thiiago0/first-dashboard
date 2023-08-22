const CarritoItem = ({ removeProduct, id, nameProduct, quantity, price }) => {
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
