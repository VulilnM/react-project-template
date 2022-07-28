import React from "react";
import Navbar from "../../component/Navbar";
import Section from "./Section";
import About from "../../component/About";
import Services from "../../component/Services";
import Features from "../../component/Features";
import Pricing from "../../component/Pricing";
import Clients from "../../component/Clients";
import Blog from "../../component/Blog";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer/Footer";

const Layout7 = () => {
  return (
    <React.Fragment>
      <Navbar isDark="navbar-light"/>
      <Section />
      <About />
      <Services />
      <Features />
      <Pricing />
      <Clients />
      <Blog />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};
export default Layout7;
