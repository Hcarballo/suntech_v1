import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";
import logo from "../../assets/Logos/logo_suntech_2.png";

const Navbar = ({ user, onLoginClick, onRegisterClick, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // drawer carrito
  const [cartItems, setCartItems] = useState([]); // productos en carrito

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCart = () => setCartOpen(!cartOpen);

  // Agregar producto al carrito
  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p._id === product._id);
      if (existing) {
        const newQty = Math.min(existing.quantity + quantity, product.stock);
        return prev.map((p) =>
          p._id === product._id ? { ...p, quantity: newQty } : p
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
    setCartOpen(true);
  };

  // Actualizar cantidad en carrito
  const updateQuantity = (_id, quantity, stock) => {
    if (quantity <= 0 || quantity > stock) return;
    setCartItems((prev) =>
      prev.map((p) => (p._id === _id ? { ...p, quantity } : p))
    );
  };

  // Eliminar producto del carrito
  const removeFromCart = (_id) => {
    setCartItems((prev) => prev.filter((p) => p._id !== _id));
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.precioPublico * item.quantity,
    0
  );

  // Links según rol
  const adminLinks = [
    { label: "Inicio", to: "/", type: "link" },
    { label: "Usuarios", to: "/usuarios", type: "link" },
    { label: "ProductList", to: "/productslist", type: "link" },
  ];

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

  const linksToRender = user?.role === "admin" ? adminLinks : userLinks;

  // Smooth scroll para anchors
  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    if (isOpen) toggleSidebar();
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

        {/* Carrito */}
        <div className="cart-icon-container">
          <FaShoppingCart className="cart-icon" onClick={toggleCart} />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </div>

        <div className="hamburger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
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
              <button className="nav-btn" onClick={onLoginClick}>Login</button>
            </li>
          ) : (
            <li>
              <button className="nav-btn" onClick={onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Drawer lateral carrito */}
      {cartOpen && (
        <div className="cart-drawer-overlay" onClick={toggleCart}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleCart}>×</button>
            <h2>Mi Carrito</h2>

            {cartItems.length === 0 ? (
              <p>El carrito está vacío</p>
            ) : (
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item._id} className="cart-item">
                    <div className="cart-item-info">
                      <strong>{item.codigo}</strong>
                      <span>${item.precioPublico.toFixed(2)}</span>
                    </div>
                    <div className="cart-item-controls">
                      <input
                        type="number"
                        min="1"
                        max={item.stock}
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item._id, Number(e.target.value), item.stock)
                        }
                      />
                      <button onClick={() => removeFromCart(item._id)}>Eliminar</button>
                    </div>
                  </div>
                ))}
                <div className="cart-total">
                  <strong>Total: ${cartItems.reduce((t,i)=>t+i.precioPublico*i.quantity,0).toFixed(2)}</strong>
                </div>
                <button className="btn-confirm">Finalizar compra</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
