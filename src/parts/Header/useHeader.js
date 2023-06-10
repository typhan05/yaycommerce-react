import { useState, useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const useHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const { width } = useWindowDimensions();

  const openHandler = () => {
    let root = document.getElementsByTagName("html")[0];
    root.classList.toggle("overflow-hidden");
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    let root = document.getElementsByTagName("html")[0];
    root.classList.remove("overflow-hidden");
    setOpenMenu(false);
  };

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const header = document.querySelector("header");
      const headerHeight = header.offsetHeight;
      let direction = "top";
      if (scrollY > headerHeight) {
        direction = scrollY > lastScrollY ? "down" : "up";
      } else {
        direction = "top";
      }

      setScrollDirection(direction);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  useEffect(() => {
    if (width > 768) {
      let root = document.getElementsByTagName("html")[0];
      root.classList.remove("overflow-hidden");
    }
  }, [width]);

  return {
    openMenu,
    closeMenu,
    openHandler,
    scrollDirection,
  };
};

export default useHeader;
