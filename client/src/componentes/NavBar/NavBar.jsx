import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";
import logo from "../../assets/Logos/logo_suntech_2.png";

const Navbar = ({ user, onLoginClick, onRegisterClick, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCart = () => setCartOpen(!cartOpen);

  // =========================
  // Carrito
  // =========================
  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p._id === product._id);
      if (existing) {
        const newQty = Math.min(existing.quantity + quantity, product.stock);
        return prev.map((p) =>
          p._id === product._id ? { ...p, quantity: newQty } : p
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (_id, quantity, stock) => {
    if (quantity <= 0 || quantity > stock) return;
    setCartItems((prev) =>
      prev.map((p) => (p._id === _id ? { ...p, quantity } : p))
    );
  };

  const increaseQuantity = (id, stock) => {
    const item = cartItems.find((i) => i._id === id);
    if (item && item.quantity < stock)
      updateQuantity(id, item.quantity + 1, stock);
  };

  const decreaseQuantity = (id) => {
    const item = cartItems.find((i) => i._id === id);
    if (item && item.quantity > 1)
      updateQuantity(id, item.quantity - 1, item.stock);
  };

  const removeFromCart = (_id) => {
    setCartItems((prev) => prev.filter((p) => p._id !== _id));
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.precioPublico * item.quantity,
    0
  );

  // =========================
  // Links según rol
  // =========================
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

  // =========================
  // Manejo de navegación con hash
  // =========================
  const handleAnchorClick = (e, id) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // Si no estamos en la home → navegamos a /#id
      navigate(`/#${id}`);
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      // Si ya estamos en la home
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
      window.location.hash = id; // Actualiza la URL
    }

    if (isOpen) toggleSidebar();
  };

  // Detectar hash al entrar (ej: /#nos)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // =========================
  // Render
  // =========================
  return (
    <div className="encabezado">
      {/* Logo y contacto */}
      <div className="seccionlogo">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
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

      {/* Navbar principal */}
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
              <button className="nav-btn" onClick={onLoginClick}>Login</button>
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
              <button className="nav-btn" onClick={onLoginClick}>
                Login
              </button>
            </li>
          ) : (
            <li>
              <button className="nav-btn" onClick={onLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Drawer lateral carrito */}
      {cartOpen && (
        <div className="cart-drawer-overlay" onClick={toggleCart}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleCart}>
              ×
            </button>
            <h2>Mi Carrito</h2>

            {cartItems.length === 0 ? (
              <p>El carrito está vacío</p>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <div key={item._id} className="cart-item">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.codigo}
                          className="cart-item-img"
                        />
                      )}
                      <div className="cart-item-info">
                        <strong>{item.codigo}</strong>
                        <span>${item.precioPublico.toFixed(2)}</span>
                      </div>
                      <div className="cart-item-controls">
                        <button onClick={() => decreaseQuantity(item._id)}>-</button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item._id, item.stock)}
                        >
                          +
                        </button>
                        <button onClick={() => removeFromCart(item._id)}>
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-total">
                  <strong>Total: ${cartTotal.toFixed(2)}</strong>
                </div>
                <button
                  className="btn-confirm"
                  onClick={() => setShowCheckoutForm(true)}
                >
                  Finalizar compra
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Formulario checkout */}
      {showCheckoutForm && (
        <div
          className="checkout-overlay"
          onClick={() => setShowCheckoutForm(false)}
        >
          <div className="checkout-form" onClick={(e) => e.stopPropagation()}>
            <h2>Datos para la compra</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Compra enviada al backend!");
                setCartItems([]);
                setShowCheckoutForm(false);
              }}
            >
              <input type="text" name="nombre" placeholder="Nombre" required />
              <input type="text" name="apellido" placeholder="Apellido" required />
              <input type="text" name="dni" placeholder="DNI" required />
              <input type="email" name="correo" placeholder="Correo" required />
              <input type="tel" name="telefono" placeholder="Teléfono" required />
              <button type="submit">Enviar pedido</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
