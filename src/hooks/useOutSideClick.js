import { useState, useEffect, useRef } from "react";

export default function useOutsideClick(initialValue) {
  const [isActive, setIsActive] = useState(initialValue);
  const ref = useRef(null);

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return { ref, isActive, setIsActive };
}
