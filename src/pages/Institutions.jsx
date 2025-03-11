import "../styles/institutions.css";
import acibademLogo from "../assets/images/acibadem.jpg";
import amerikanLogo from "../assets/images/amerikan.jpg";
import medipolLogo from "../assets/images/medipol.jpg";
import kocLogo from "../assets/images/koc.jpg";
import anadoluLogo from "../assets/images/anadolu.jpeg";

const institutionsData = [
  { name: "Acıbadem Hastanesi", logo: acibademLogo },
  { name: "Amerikan Hastanesi", logo: amerikanLogo },
  { name: "Medipol Hastanesi", logo: medipolLogo },
  { name: "Koç Üniversitesi Hastanesi", logo: kocLogo },
  { name: "Anadolu Sağlık Merkezi", logo: anadoluLogo }
];

const Institutions = () => {
  return (
    <div className="institutions-page">
      <h1>Anlaşmalı Kurumlar</h1>
      <p>Sigorta hizmetlerimiz kapsamında anlaşmalı olduğumuz kurumlar.</p>

      <div className="institutions-list">
        {institutionsData.map((inst, index) => (
          <div key={index} className="institution-card">
            <img src={inst.logo} alt={inst.name} loading="lazy" />
            <h2>{inst.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Institutions;
