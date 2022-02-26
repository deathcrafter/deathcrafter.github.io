import { useState, useEffect } from "react";

const useMouseDetector = () => {
  const getMouseCapability = () => window.matchMedia("(pointer: fine)").matches;
  const [isMouseCapable, setIsMouseCapable] = useState(getMouseCapability());
  const mqListener = (e) => {
    setIsMouseCapable(e.matches);
  };

  useEffect(() => {
    const mouseCapableMq = window.matchMedia("(prefers-color-scheme: dark)");
    mouseCapableMq.addEventListener("change", mqListener);
    return () => mouseCapableMq.removeEventListener("change", mqListener);
  }, []);
  return isMouseCapable;
};

export default useMouseDetector;
