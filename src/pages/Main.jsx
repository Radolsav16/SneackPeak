import { useState } from "react";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Image from "../components/image/Image";
import Modal from "../components/modal/Modal";
import Pricing from "../components/priceng/Pricing";
import Sponsor from "../components/sponsor/Sponsor";
import VendorSection from "../components/vendor-section/VendorSection";

export default function Main({
    modal,
    onClose,
    SetModal 
}){
  
    return(
        <>
            {modal && <Modal onClose={onClose}/>}
            <Hero />
            <Sponsor />
            <About />
            <Pricing  SetModal={SetModal}/>
            <VendorSection />
            <Image />
        </>
    )
}