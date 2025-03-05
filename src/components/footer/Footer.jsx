import { Link } from "react-router-dom";
import { goUp } from "../../utils/goUp";

export default function Footer(){
    return(
        <>
    <footer className="footer-container">
      <div className="footer-content">
        <div className="follow-us">
          <h2>FOLLOW US</h2>
          <ul>
            <li>Instagram</li>
            <li><Link to={"/sneakpeak/gmail"} onClick={goUp}>Instagram</Link></li>
            <li><Link to={"/sneakpeak/gmail"} onClick={goUp}>Tiktok</Link></li>
          </ul>
        </div>
        <div className="contact-us">
          <h2>CONTACT US</h2>
          <ul>
            <li><Link to={"/sneakpeak/gmail"} onClick={goUp}>sneakpeak2k24@gmail.com</Link></li>
    
            <li>+359 888407209</li>
            <li>24/7 Support service</li>
          </ul>
        </div>
        <div className="terms-policy">
          <h2>TERMS & POLICY</h2>
          <ul>
            <li><Link to={"/sneakpeak/terms-policy"} onClick={goUp}>Privacy Policy</Link></li>
            <li><Link to={"/sneakpeak/terms-policy"} onClick={goUp}>Terms & Conditions</Link></li>
            <li><Link to={"/sneakpeak/faq"} onClick={goUp}>FAQ</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Sneakpeak. All rights reserved.</p>
        <div className="footer-logo">
            <img src="/src/assets/Screenshot_3-removebg-preview.png"/>
        </div>
      </div>
    </footer>
        </>
    )
}