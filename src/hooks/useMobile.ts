import { useEffect, useState } from 'react';

function useIsMobile() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if (windowWidth < 768) setIsMobile(true)
    if (windowWidth >= 768) setIsMobile(false)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return isMobile

}

export default useIsMobile;