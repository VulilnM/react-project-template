import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Scrollspy from "react-scrollspy";
import {  
  NavbarToggler,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";

// Import Logo
import logo from "../assets/images/zooki.png";

const Navbar = (props) => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [navclass, setnavclass] = useState("");
 
  const toggle = () => setisOpenMenu(!isOpenMenu);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavclass("nav-sticky");
    } else {
      setnavclass("");
    }
  }
  return (
    <React.Fragment>
      <nav className={"navbar navbar-expand-lg fixed-top navbar-custom " +
      props.isDark + 
        " sticky " +
        "sticky-dark " +
        navclass
      }
        id="navbar"
      >
        <Container>
          <Link className="navbar-brand logo" to="/">

            <img
              src={logo}
              alt=""
              height="20"
            />
          </Link>
          <NavbarToggler
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            onClick={toggle}
          >
            <i className="mdi mdi-menu"></i>
          </NavbarToggler>
          <Collapse
            isOpen={isOpenMenu}
            className="navbar-collapse"
            id="navbarCollapse"
          >
            <Scrollspy
              offset={-18}
              items={[
                "home",
                "about",
                "services",
                "features",
                "pricing",
                "clients",
                "blog",
                "contact",
              ]}
              currentClassName="active"
              className="navbar-nav ms-auto navbar-center"
              id="navbar-navlist"
            >
              <li className="nav-item">
                <NavLink data-scroll href="#home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink data-scroll href="#about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink data-scroll href="#services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink data-scroll href="#features">Features</NavLink>
              </li>
              <li className="nav-item">
                <NavLink data-scroll href="#pricing">Pricing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink data-scroll href="#clients">Clients</NavLink>
              </li>
              <li className="nav-item">
                <NavLink data-scroll href="#blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink data-scroll href="#contact">Contact us</NavLink>
              </li>
            </Scrollspy>
          </Collapse>
        </Container>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;