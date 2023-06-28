import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import zap from "../assets/img/Icons/whatsapp.png";
import insta from "../assets/img/Icons/instagram (1).png";
import logo from "../assets/img/Icons/logotrans branco (1).png";

import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Sobre nós
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Serviços
              </Nav.Link>
              <Nav.Link
                href="#connect"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Assinaturas
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://api.whatsapp.com/send/?phone=5511913989895&text=Ol%C3%A1%2C+tudo+bem%3F&type=phone_number&app_absent=0">
                  <img src={zap} alt="" />
                </a>
                <a href="https://www.instagram.com/barberflix_oficial/">
                  <img src={insta} alt="" />
                </a>
              </div>
              <a href="https://api.whatsapp.com/send/?phone=5511913989895&text=Ol%C3%A1%2C+tudo+bem%3F&type=phone_number&app_absent=0">
                {" "}
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
