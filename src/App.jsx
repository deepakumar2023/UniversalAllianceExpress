import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./layouts/Header";
import FooterNavigation from "./layouts/FooterNavigation";
import Home from "./pages/Home";
// import Footer from "./layouts/Footer";
import ScrollUp from "./components/ScrollUp";
import HeaderContact from "./layouts/HeaderContact";
import Solutions from "./pages/Solutions";
import GoToTop from "./components/GoToTop";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PagenotFound";
import HowOptmisize from "./components/bloginternalpages/HowOptmisize";
import Calculator from "./components/Calculator/Calculator";
import Service from "./pages/Service";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <GoToTop />
      <HeaderContact />
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/service" element={<Service />} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/calulator" element={<Calculator />} /> */}
          <Route path="*" element={<PageNotFound />} />
          <Route path="/blog/:id" element={<HowOptmisize />} />
          {/* <Route path="/subcategory/:subcategoryName" element={<ServiceDetails />} /> */}
          {/* <Route path="/subcategory/:serviceId/:subcategoryName" element={<ServiceDetails />} /> */}
        </Routes>
      )}
      <FooterNavigation />
      {/* <Footer /> */}
      <ScrollUp />
    </>
  );
}

export default App;
