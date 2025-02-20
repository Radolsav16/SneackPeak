import { Routes , Route } from "react-router-dom"

import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Pricing from "./components/priceng/Pricing"
import Sponsor from "./components/sponsor/Sponsor"
import Vendor from "./components/vendor/Vendor"
import Image from "./components/image/Image"
import SponsorPage from "./pages/SponsorPage"
import Main from "./pages/Main"
import BecomeVendor from "./pages/BecomeVendor"
import FaqPage from "./pages/FaqPage"



function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element = {<Main />} /> 
      <Route path="/sneakpeak/sponsors" element={<SponsorPage />} />
      <Route path="/sneakpeak/become-vendor" element={<BecomeVendor />} />
      <Route path="/sneakpeak/faq" element={<FaqPage />} />


      {/* <Sponsor />
      <About />
      <Pricing />
      <Image />
      <Vendor />*/}
      </Routes>
    <Footer />
    </>
  )
}

export default App
