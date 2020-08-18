import React, { useState, useEffect, useRef } from 'react';

const withNavbar = (Navbar) => (props) => {
  const [activeNav, setActiveNav] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleNavClick = (event) => {
      event.preventDefault();
      setActiveNav(!activeNav);
    };
    const navBurger = ref.current;
    navBurger.addEventListener('click', handleNavClick);
    return () => {
      navBurger.removeEventListener('click', handleNavClick);
    };
  }, [ref, activeNav, setActiveNav]);

  return <Navbar navRef={ref} activeNav={activeNav} {...props} />;
};

export default withNavbar;
