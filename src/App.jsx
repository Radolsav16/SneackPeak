import { Routes , Route } from "react-router-dom"
import Footer from "./components/footer/Footer"

import SponsorPage from "./pages/SponsorPage"
import Main from "./pages/Main"
import BecomeVendor from "./pages/BecomeVendor"
import FaqPage from "./pages/FaqPage"
import TermsPolicy from "./pages/Terms&Policy"
import AboutPage from "./pages/AboutPage"
import { useState } from "react"
import Modal from "./components/modal/Modal"
import MainHeader from "./components/main-header/MainHeader"




function App() {

   const [modal,SetModal] = useState(false);
   const [white,SetWhite] = useState(false);
    
      const onClose = () =>{
          SetModal(false);
      }

  return (
    <>
    {modal && <Modal onClose={onClose}/>}
    <MainHeader isWhite={white} setModal={SetModal}/>
    <Routes>
      <Route path="/" element = {<Main SetModal={SetModal} setWhite={SetWhite}/>} /> 
      <Route path="/sneakpeak/sponsors" element={<SponsorPage setWhite={SetWhite} />}  />
      <Route path="/sneakpeak/become-vendor" element={<BecomeVendor  setWhite={SetWhite}/>} />
      <Route path="/sneakpeak/faq" element={<FaqPage />} />
      <Route path="/sneakpeak/terms-policy" element={<TermsPolicy />} />
      <Route path="/sneakpeak/about" element={<AboutPage setWhite={SetWhite}/>} />
    
    </Routes>
    <Footer />
    </>
  )
}

export default App
