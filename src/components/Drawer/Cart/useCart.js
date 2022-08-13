import {useEffect, useState} from 'react';

const useCart = () => {
  const [isShowing, setIsShowing] = useState(false);

  // Allow to use the `esc` key
  useEffect(() => {
    function handleEscape(event) {
      if (!isShowing) return;

      if (event.key === "Escape") {
        setIsShowing(false);
      }
    }

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isShowing]);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle
  }
};

export default useCart;