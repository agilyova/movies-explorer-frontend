import { useState, useEffect } from "react";

const getConfigValues = (width) => {
  if (width <= 590) {
    return {
      startTotal: 5,
      increment: 1,
    };
  } else if (width > 590 && width <= 1100) {
    return {
      startTotal: 8,
      increment: 2,
    };
  } else {
    return {
      startTotal: 12,
      increment: 3,
    };
  }
};

const useBreakpoint = () => {
  const [configValue, setConfigValue] = useState(() =>
    getConfigValues(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = function () {
      setTimeout(
        () => setConfigValue(getConfigValues(window.innerWidth)),
        1000
      );
    };
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return configValue;
};
export default useBreakpoint;
