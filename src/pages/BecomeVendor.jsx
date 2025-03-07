import Image from "../components/image/Image";
import Vendor from "../components/vendor/Vendor";
import VendorInfo from "../components/vendor/VendorInfo";

export default function BecomeVendor({
    setWhite
}){
   setWhite(false)
   document.body.style.backgroundColor = 'black';

    return(
        <>
            <Vendor />
            <VendorInfo />
            <Image />
        </>
    )
}