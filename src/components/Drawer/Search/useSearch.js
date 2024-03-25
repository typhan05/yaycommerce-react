import { useEffect, useState } from "react";

const useSearch = () => {
  const [isSearchShowing, setIsSearchShowing] = useState(false);

  // Allow to use the `esc` key
  useEffect(() => {
    function handleEscape(event) {
      if (!isSearchShowing) return;

      if (event.key === "Escape") {
        setIsSearchShowing(false);
      }
    }

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isSearchShowing]);

  function toggleSearch() {
    let root = document.getElementsByTagName("html")[0];
    root.classList.toggle("overflow-hidden");
    setIsSearchShowing(!isSearchShowing);
  }

  return {
    isSearchShowing,
    toggleSearch,
  };
};

export default useSearch;
