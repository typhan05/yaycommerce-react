import {useState, useEffect} from 'react';

const useHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  const openHandler = () => {
    let root = document.getElementsByTagName('html')[0];
    root.classList.toggle('overflow-hidden');
    setOpenMenu(!openMenu);
  }

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return {
    openMenu,
    openHandler,
    scrollDirection,
  }
};

export default useHeader;