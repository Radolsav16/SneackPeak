import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const  [menuOpen,setMenuOpen] = useState(false)
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to={"/"}><img src="/src/assets/Screenshot_4-removebg-preview.png" alt="SneakPeak Logo" /></Link>
        </div>
        {/* <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        ☰
      </button> */}
      {/* className="nav-links" */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sneakpeak/about">About Us</Link></li>
          <li><Link to="/sneakpeak/sponsors">Sponsors</Link></li>
          <li><Link to="sneakpeak/become-vendor">Become A Vendor</Link></li>
          <li><a href="/terms-policy">Terms & Policy</a></li>
          <li><Link to="/sneakpeak/faq">FAQ</Link></li>
          <li><a href="/" className="buy-tickets">Buy Tickets</a></li>
        </ul>
      </nav>
    </>
  );
}
