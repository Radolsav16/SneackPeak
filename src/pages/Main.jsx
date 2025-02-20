import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Image from "../components/image/Image";
import Pricing from "../components/priceng/Pricing";
import Sponsor from "../components/sponsor/Sponsor";
import VendorSection from "../components/vendor-section/VendorSection";

export default function Main(){
    return(
        <>
            <Hero />
            <Sponsor />
            <About />
            <Pricing />
            <VendorSection />
            <Image />
        </>
    )
}