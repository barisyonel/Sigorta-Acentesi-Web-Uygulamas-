import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

// Lazy Loading ile sayfaları dinamik olarak yükle
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Products = lazy(() => import("./pages/Products"));
const Institutions = lazy(() => import("./pages/Institutions"));
const FinancialAdvice = lazy(() => import("./pages/FinancialAdvice"));
const Claims = lazy(() => import("./pages/Claims"));
const Reports = lazy(() => import("./pages/Reports"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Suspense fallback={<div className="loading">Sayfa Yükleniyor...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/financial-advice" element={<FinancialAdvice />} />
            <Route path="/claims" element={<Claims />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
