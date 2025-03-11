import { memo } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Sigorta Firması" />
          </Link>
        </div>
      </div>
      <div className="navbar-menu">
        <ul className="nav-links">
          <li><Link to="/products">Ürünler</Link></li>
          <li><Link to="/institutions">Anlaşmalı Kurumlar</Link></li>
          <li><Link to="/claims">Hasar İşlemleri</Link></li>
          <li><Link to="/contact">İletişim</Link></li>
          <li><Link to="/financial-advice">Finansal Danışmanlık</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default memo(Navbar);
