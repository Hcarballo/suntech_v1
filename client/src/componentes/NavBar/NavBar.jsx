import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/Logos/logo_suntech_2.png";

const Navbar = ({ user, onLoginClick, onRegisterClick, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    if (isOpen) toggleSidebar();
  };

  // Links para admin: solo los esenciales
  const adminLinks = [
    { label: "Inicio", to: "/", type: "link" },
    { label: "Usuarios", to: "/usuarios", type: "link" },
    { label: "ProductList", to: "/productslist", type: "link" },
  ];

  // Links para usuarios normales
  const userLinks = [
    { label: "Inicio", to: "/", type: "link" },
    { label: "Fotovoltaica", to: "pnls", type: "anchor" },
    { label: "Videovigilancia", to: "cam", type: "anchor" },
    { label: "Termotanques", to: "tan", type: "anchor" },
    { label: "Bombas de Agua", to: "bom", type: "anchor" },
    { label: "Climatización de Piscinas", to: "mant", type: "anchor" },
    { label: "Nosotros", to: "nos", type: "anchor" },
    { label: "Productos", to: "/products", type: "link" },
    { label: "Contacto", to: "cont", type: "anchor" },
  ];

  // Elegir links según rol
  const linksToRender = user?.role === "admin" ? adminLinks : userLinks;

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

      {/* Menú principal */}
      <nav className="navbar">
        <ul className="nav-links">
          {linksToRender.map((link) =>
            link.type === "link" ? (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="nav-link"
                  onClick={() => isOpen && toggleSidebar()}
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.label}>
                <a href={`#${link.to}`} onClick={(e) => handleAnchorClick(e, link.to)}>
                  {link.label}
                </a>
              </li>
            )
          )}

          {/* Login / Logout */}
          {!user ? (
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

        <div className="hamburger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
        <ul>
          {linksToRender.map((link) =>
            link.type === "link" ? (
              <li key={link.label}>
                <Link to={link.to} className="nav-link" onClick={toggleSidebar}>
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.label}>
                <a href={`#${link.to}`} onClick={(e) => handleAnchorClick(e, link.to)}>
                  {link.label}
                </a>
              </li>
            )
          )}

          {!user ? (
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

