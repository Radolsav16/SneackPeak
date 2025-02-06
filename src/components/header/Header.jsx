export default function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="./src/assets/Screenshot_4-removebg-preview.png" alt="SneakPeak Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#vendor">Become a Vendor</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#tickets" className="buy-tickets">Buy Tickets</a></li>
        </ul>
      </nav>
    </>
  );
}
