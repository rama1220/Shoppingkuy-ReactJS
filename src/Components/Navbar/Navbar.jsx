import logo from "../Assets/logo.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import InputComponent from "../Input/InputComponent";
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
            <p>Abangku.Co</p>
          </div>
          <ul className="nav-menu">
            <li onClick={handleClick}>
              <NavLink to="/" className="nav-link">
                <h5>Home</h5>
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/allproduct" className="nav-link">
                <h5>All Product</h5>
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/about" className="nav-link">
                <h5>About</h5>
              </NavLink>
            </li>
            <li>
             <InputComponent/>
            </li>
          </ul>
          <div className="nav-login-cart" onClick={handleClick}>
            <NavLink to="/login" className="nav-login">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </NavLink>

            <NavLink to="/cart" className="nav-link" onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </NavLink>
            <div className="nav-cart-count">{totalItems}</div>
          </div>
        </div>
        <div className="running-text">
          <h4>Get 10% off on your first purchase</h4>
        </div>
      </nav>
    </>
  );
}
