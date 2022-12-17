import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const HEADER_HEIGHT = '60px';
const HEADER_ZINDEX = '1';

function HeaderWrapper({ children }) {
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = () => {
    setScrollLeft(-window.scrollX);
  };

  useEffect(() => {
    setScrollLeft(window.scrollX);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <Container>{children}</Container>;
}

const Container = styled.div(left => ({
    position: 'fixed',
    top: '0px',
    left: `${left}px`,
    zIndex: `${HEADER_ZINDEX}`,
    backgroundColor: 'white',
    minWidth: `calc(900px - 2%)`,
    boxSizing: `border-box`,
    width: '100%',
    height: `${HEADER_HEIGHT}`,
    flexDirection: `row`,
    padding: `0 4%`,
    borderBottom: `1px solid rgba(2, 32, 71, 0.05)`,
}));

export default HeaderWrapper;
