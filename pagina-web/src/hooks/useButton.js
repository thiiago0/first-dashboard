import { useState } from "react";

export const useButton = () => {
  const [showButton, setShowButton] = useState(false);

  const toggleButton = () => {
    setShowButton(!showButton);
  };
  return {
    showButton,
    toggleButton,
  };
};
