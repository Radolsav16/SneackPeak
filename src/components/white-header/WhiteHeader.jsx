import { Link } from "react-router-dom"



export default function WhiteHeader({
  setModal
}){
    return(
        <>
            <nav className="navbar-white">
                {/* Logo on the Left */}
                <div className="logo">
                  <Link to={"/"}>
                    <img src="/assets/Screenshot_3-removebg-preview.png" alt="SneakPeak Logo" />
                  </Link>
                </div>
            
                {/* Links & Button on the Right */}
                <div className="nav-container">
                  <ul className="nav-links-white">
                    <li><Link to="/sneakpeak/about">About Us</Link></li>
                    <li><Link to="/sneakpeak/sponsors">Sponsors</Link></li>
                    <li><Link to="/sneakpeak/become-vendor">Become A Vendor</Link></li>
                    <li><Link to="/sneakpeak/terms-policy">Terms & Policy</Link></li>
                  </ul>
                  <Link className="button-buy-white" onClick={()=>setModal(true)}><span>Buy Tickets</span></Link> 
                </div>
              </nav>
        </>
    )
}