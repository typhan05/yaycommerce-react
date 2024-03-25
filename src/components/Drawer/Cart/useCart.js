import { useEffect, useState } from "react";

const useCart = () => {
  const [isShowingCart, setIsShowing] = useState(false);

  // Allow to use the `esc` key
  useEffect(() => {
    function handleEscape(event) {
      if (!isShowingCart) return;

      if (event.key === "Escape") {
        setIsShowing(false);
      }
    }

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isShowingCart]);

  function toggleDrawerCart() {
    setIsShowing(!isShowingCart);
  }

  return {
    isShowingCart,
    toggleDrawerCart,
  };
};

export default useCart;
