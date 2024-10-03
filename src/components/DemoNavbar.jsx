import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container,
  Collapse,
  Button
} from "reactstrap";
import { FaSignOutAlt } from 'react-icons/fa';

import routes from "../routes";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { starLogout } from "../store/auth/thunks";

export const DemoNavbar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch()

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Buscando:', searchTerm);
  };

  
  const onLogout = () => {
    dispatch( starLogout() );
  }





  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("transparent");
  const sidebarToggle = React.useRef();
  const location = useLocation();


  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("dark");
    }
    setIsOpen(!isOpen);
  };
  
  const getBrand = () => {
    let brandName = "Default Brand";
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  };
  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  };
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("dark");
    } else {
      setColor("transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor.bind(this));
  });
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);



  
  return (
    
    <Navbar
      color={
        location.pathname.indexOf("full-screen-maps") !== -1 ? "dark" : color
      }
      expand="lg"
      className={
        location.pathname.indexOf("full-screen-maps") !== -1
          ? "navbar-absolute fixed-top"
          : "navbar-absolute fixed-top " +
            (color === "transparent" ? "navbar-transparent " : "")
      }
    >
      <Container fluid >
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button
              type="button"
              ref={sidebarToggle}
              className="navbar-toggler"
              onClick={() => openSidebar()}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <NavbarBrand href="/">{getBrand()}
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Button color="danger" onClick={ onLogout }>
              <FaSignOutAlt style={{ marginRight: '6px' }} />
              Logout
            </Button>
          </Collapse>
          <NavbarToggler onClick={toggle}> </NavbarToggler>                   
        </div>
      </Container>
    </Navbar>
  );
};


