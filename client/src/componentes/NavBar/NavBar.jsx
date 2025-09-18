import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/Logos/logo_suntech_2.png";

const Navbar = ({ user, onLoginClick, onRegisterClick, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="encabezado">
      <div className="seccionlogo">
        <div className="logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="seccioninfo">
          <div className="d-flex flex-column gap-2 text-black">
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-telephone-fill"></i>
              <span>+54 9 3412587830</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-envelope-fill"></i>
              <span>admin@suntech.com.ar</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <a href="#pnls" onClick={(e) => handleAnchorClick(e, "pnls")}>
              Fotovoltaica
            </a>
          </li>
          <li>
            <a href="#cam" onClick={(e) => handleAnchorClick(e, "cam")}>
              Videovigilancia
            </a>
          </li>
          <li>
            <a href="#tan" onClick={(e) => handleAnchorClick(e, "tan")}>
              Termotanques
            </a>
          </li>
          <li>
            <a href="#bom" onClick={(e) => handleAnchorClick(e, "bom")}>
              Bombas de Agua
            </a>
          </li>
          <li>
            <a href="#mant" onClick={(e) => handleAnchorClick(e, "mant")}>
              Climatización de Piscinas
            </a>
          </li>
          <li>
            <a href="#nos" onClick={(e) => handleAnchorClick(e, "nos")}>
              Nosotros
            </a>
          </li>
          <li>
            <Link to="/products" className="nav-link" onClick={() => setIsOpen(false)}>
              Productos
            </Link>
          </li>
          <li>
            <a href="#cont" onClick={(e) => handleAnchorClick(e, "cont")}>
              Contacto
            </a>
          </li>

          {!user ? (
            <>
              <li>
                <button
                  className="nav-btn"
                  onClick={() => {
                    onLoginClick();
                    setIsOpen(false);
                  }}
                >
                  Login
                </button>
              </li>
              {/* Si querés, descomenta Registrarse */}
              <li>
                <button
                  className="nav-btn"
                  onClick={() => {
                    onRegisterClick();
                    setIsOpen(false);
                  }}
                >
                  Registrarse
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                className="nav-btn"
                onClick={() => {
                  onLogout();
                  setIsOpen(false);
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        <div className="hamburger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
        <ul>
          <li>
            <Link to="/" className="nav-link" onClick={toggleSidebar}>
              Inicio
            </Link>
          </li>
          <li>
            <a href="#pnls" onClick={(e) => { e.preventDefault(); handleAnchorClick(e, "pnls"); toggleSidebar(); }}>
              Fotovoltaica
            </a>
          </li>
          <li>
            <a href="#cam" onClick={(e) => { e.preventDefault(); handleAnchorClick(e, "cam"); toggleSidebar(); }}>
              Videovigilancia
            </a>
          </li>
          <li>
            <a href="#tan" onClick={(e) => { e.preventDefault(); handleAnchorClick(e, "tan"); toggleSidebar(); }}>
              Termotanques
            </a>
          </li>
          <li>
            <a href="#bom" onClick={(e) => { e.preventDefault(); handleAnchorClick(e, "bom"); toggleSidebar(); }}>
              Bombas de Agua
            </a>
          </li>
          <li>
            <a href="#mant" onClick={(e) => { e.preventDefault(); handleAnchorClick(e, "mant"); toggleSidebar(); }}>
              Climatización de Piscinas
            </a>
          </li>
          <li>
            <a href="#nos" onClick={(e) => { e.preventDefault(); handleAnchorClick(e, "nos"); toggleSidebar(); }}>
              Nosotros
            </a>
          </li>
          <li>
            <Link to="/products" className="nav-link" onClick={toggleSidebar}>
              Productos
            </Link>
          </li>
          <li>
            <a href="#cont" onClick={(e) => { e.preventDefault(); handleAnchorClick(e, "cont"); toggleSidebar(); }}>
              Contacto
            </a>
          </li>

          {!user ? (
            <>
              <li>
                <button
                  className="nav-btn"
                  onClick={() => {
                    onLoginClick();
                    toggleSidebar();
                  }}
                >
                  Login
                </button>
              </li>
              {/* Registrarse opcional */}
              <li>
                <button
                  className="nav-btn"
                  onClick={() => {
                    onRegisterClick();
                    toggleSidebar();
                  }}
                >
                  Registrarse
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                className="nav-btn"
                onClick={() => {
                  onLogout();
                  toggleSidebar();
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Navbar;
