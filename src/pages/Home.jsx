import "../styles/home.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import Carousel from "../components/Carousel";
import LeadForm from "../components/LeadForm";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="home">
      {/* SEO Ayarları */}
      <Helmet>
        <title>Sigorta Acentesi - Ana Sayfa</title>
        <meta name="description" content="Geleceğinizi güvence altına alın! En iyi sigorta çözümlerini keşfedin." />
      </Helmet>

      {/* İçerikler */}
      <Hero />
      <Carousel />
      <Services />
      <FAQ />
      <LeadForm />
    </div>
  );
};

export default Home;
