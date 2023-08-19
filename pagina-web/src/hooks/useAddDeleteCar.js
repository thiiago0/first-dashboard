import { useState, useEffect } from "react";

export const useAddDeleteCar = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []); // Este efecto solo se ejecuta al montar el componente

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setNewProduct(storedProducts);
  }, [products]); // Este efecto solo se ejecuta al montar el componente

  const addProduct = (newProduct) => {
    const existingProduct = products.find(
      (product) => product.id === newProduct.id
    );

    if (existingProduct) {
      const updatedProducts = products.map((product) => {
        if (product.id === newProduct.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setProducts(updatedProducts); // Actualiza el estado
    } else {
      const updatedProducts = [...products, { ...newProduct, quantity: 1 }];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setProducts(updatedProducts); // Actualiza el estado
    }
  };

  const removeProduct = (productId) => {
    const existingProduct = products.find(
      (product) => product.id === productId
    );

    if (existingProduct) {
      let updatedProducts = [];

      if (existingProduct.quantity === 1) {
        updatedProducts = products.filter(
          (product) => product.id !== productId
        );
      } else {
        updatedProducts = products.map((product) => {
          if (product.id === productId) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        });
      }

      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setProducts(updatedProducts); // Actualiza el estado
    }
  };

  return { newProduct, addProduct, removeProduct };
};
