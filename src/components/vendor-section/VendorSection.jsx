import { Link } from "react-router-dom"
import { goUp } from "../../utils/goUp"

export default function VendorSection(){
    return(
        <>
         <div className="vendor-container">
      <h2 className="vendor-title">WANT TO BECOME A VENDOR?</h2>
      <p className="vendor-text">Fill our form and we will contact you.</p>
      <Link to={"/sneakpeak/become-vendor"} className="vendor-button" onClick={goUp}>FILL THE FORM</Link>
    </div>
        </>
    )
}