import { Routes , Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

import SponsorPage from "./pages/SponsorPage"
import Main from "./pages/Main"
import BecomeVendor from "./pages/BecomeVendor"
import FaqPage from "./pages/FaqPage"
import TermsPolicy from "./pages/Terms&Policy"
import AboutPage from "./pages/AboutPage"
import { useState } from "react"
import Modal from "./components/modal/Modal"



function App() {

   const [modal,SetModal] = useState(false);
    
      const onClose = () =>{
          SetModal(false);
      }

  return (
    <>
    {modal && <Modal onClose={onClose}/>}
    <Header SetModal={SetModal}/>
    <Routes>
      <Route path="/" element = {<Main SetModal={SetModal}/>} /> 
      <Route path="/sneakpeak/sponsors" element={<SponsorPage />} />
      <Route path="/sneakpeak/become-vendor" element={<BecomeVendor />} />
      <Route path="/sneakpeak/faq" element={<FaqPage />} />
      <Route path="/sneakpeak/terms-policy" element={<TermsPolicy />} />
      <Route path="/sneakpeak/about" element={<AboutPage />} />
    
    </Routes>
    <Footer />
    </>
  )
}

export default App
