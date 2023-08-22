import { useState, useEffect } from "react";

export const useToggleIsOpen = (initialState) => {
  const [isCartOpen, setIsCartOpen] = useState(initialState);

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
