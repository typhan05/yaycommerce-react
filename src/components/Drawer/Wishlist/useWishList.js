import { useEffect, useState } from "react";

const useWishList = () => {
  const [isShowingWishList, setIsShowingWishList] = useState(false);

  // Allow to use the `esc` key
  useEffect(() => {
    function handleEscape(event) {
      if (!isShowingWishList) return;

      if (event.key === "Escape") {
        setIsShowingWishList(false);
      }
    }

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isShowingWishList]);

  function toggleWishList() {
    setIsShowingWishList(!isShowingWishList);
  }

  return {
    isShowingWishList,
    toggleWishList,
  };
};

export default useWishList;
