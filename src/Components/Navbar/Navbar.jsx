import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export default function Navbar() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { cartItems } = useContext(ShopContext);

  const totalItems = Object.values(cartItems).reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="nav-logo">
            <img src={logo} alt="" />
            <p>ShoopingKuy</p>
          </div>
          <ul className="nav-menu">
            <li onClick={handleClick}>
              <NavLink to="/" className="nav-link">
                <h5>Shop</h5>
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/men" className="nav-link">
                <h5>Men</h5>
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/women" className="nav-link">
                <h5>Women</h5>
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/kid" className="nav-link">
                <h5>Kids</h5>
              </NavLink>
            </li>
          </ul>
          <div className="nav-login-cart" onClick={handleClick}>
            <NavLink to="/login" className="nav-login">
              <button>
                <h5>Login</h5>
              </button>
            </NavLink>

            <NavLink to="/cart" className="nav-link" onClick={handleClick}>
              <img src={cartIcon} alt="" />
            </NavLink>
            <div className="nav-cart-count">{totalItems}</div>
          </div>
        </div>
      </nav>
    </>
  );
}
