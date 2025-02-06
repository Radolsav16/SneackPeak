export default function Footer(){
    return(
        <>
    <footer className="footer-container">
      <div className="footer-content">
        <div className="follow-us">
          <h2>FOLLOW US</h2>
          <ul>
            <li>Instagram</li>
            <li>Tiktok</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="contact-us">
          <h2>CONTACT US</h2>
          <ul>
            <li>sneakpeak2k24@gmail.com</li>
            <li>+359 888407209</li>
            <li>24/7 Support service</li>
          </ul>
        </div>
        <div className="terms-policy">
          <h2>TERMS & POLICY</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Ticket & Refund Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Sneakpeak. All rights reserved.</p>
        <div className="footer-logo">
            <img src="./src/assets/Screenshot_3-removebg-preview.png"/>
        </div>
      </div>
    </footer>
        </>
    )
}