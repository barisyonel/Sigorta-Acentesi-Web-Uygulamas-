import "../styles/about.css";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="about">
      {/* SEO Ayarları */}
      <Helmet>
        <title>Hakkımızda - Sigorta Acentesi</title>
        <meta name="description" content="Sigorta firmamız hakkında detaylı bilgi alın." />
      </Helmet>

      <div className="about-container">
        <h1>Hakkımızda</h1>
        <p>Güvenilir sigorta çözümlerimizle hayatınızı güvence altına alıyoruz.</p>
      </div>
    </div>
  );
};

export default About;
