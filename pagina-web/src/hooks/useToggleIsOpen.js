import { useState, useEffect } from "react";

export const useToggleIsOpen = () => {
  // Lee el valor inicial de isCartOpen desde el localStorage
  const initialIsCartOpen = localStorage.getItem("isCartOpen") === "true";

  const [isCartOpen, setIsCartOpen] = useState(initialIsCartOpen);

  useEffect(() => {
    // Actualiza el valor de isCartOpen en el localStorage cuando cambie
    localStorage.setItem("isCartOpen", isCartOpen);
  }, [isCartOpen]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return {
    isCartOpen,
    toggleCart,
  };
};
