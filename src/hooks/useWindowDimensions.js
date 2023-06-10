import { useEffect, useState } from "react";

export const getWindowDimensions = () => {
  if (typeof window === "undefined") {
    return { clientHeight: 0, clientWidth: 0, width: 0, height: 0 };
  }
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width: width ? width : 0,
    height: height ? height : 0,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
