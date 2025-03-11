import "../styles/services.css";
import carInsurance from '../assets/images/car-insurance.jpg';
import healthInsurance from '../assets/images/health-insurance.jpg';
import homeInsurance from '../assets/images/home-insurance.jpg';
import travelInsurance from '../assets/images/travel-insurance.jpg';
import businessInsurance from '../assets/images/business-insurance.jpg';
import lifeInsurance from '../assets/images/life-insurance.jpg';

const servicesData = [
  {
    title: "Araç Sigortası",
    description: "Araç sigortası, aracınızı kaza, hırsızlık ve doğal afetlere karşı koruma altına alır.",
    advantages: ["Kaza ve hasar güvencesi", "Hırsızlık ve yangın teminatı", "Yol yardım hizmetleri"],
    image: carInsurance,
  },
  {
    title: "Sağlık Sigortası",
    description: "Sağlık sigortası, hastane masraflarınızı karşılar ve sağlık hizmetlerine erişiminizi kolaylaştırır.",
    advantages: ["Tamamlayıcı ve özel sağlık sigortası", "Ameliyat ve tedavi masraflarını karşılar", "Geniş anlaşmalı hastane ağı"],
    image: healthInsurance,
  },
  {
    title: "Konut Sigortası",
    description: "Konut sigortası, evinizi ve eşyalarınızı yangın, su baskını ve hırsızlığa karşı güvence altına alır.",
    advantages: ["Yangın ve deprem teminatı", "Su baskınına karşı koruma", "Komple ev ve eşya sigortası"],
    image: homeInsurance,
  },
  {
    title: "Seyahat Sigortası",
    description: "Yurt içi ve yurt dışı seyahatlerinizde karşılaşabileceğiniz olası sağlık sorunlarına karşı güvence sağlar.",
    advantages: ["Yurt içi ve yurt dışı koruma", "Acil sağlık hizmetleri", "Kayıp bagaj teminatı"],
    image: travelInsurance,
  },
  {
    title: "İş Yeri Sigortası",
    description: "İş yerinizi ve çalışanlarınızı beklenmedik risklere karşı güvence altına alır.",
    advantages: ["Yangın ve sel sigortası", "Çalışan güvenliği", "Hırsızlık teminatı"],
    image: businessInsurance,
  },
  {
    title: "Hayat Sigortası",
    description: "Hayat sigortası, sevdiklerinizin geleceğini güvence altına alır ve finansal destek sağlar.",
    advantages: ["Vefat teminatı", "Maluliyet teminatı", "Kredi borç ödeme güvencesi"],
    image: lifeInsurance,
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <h1>Hizmetlerimiz</h1>
      <p>Size en uygun sigorta çözümlerini sunuyoruz.</p>

      <div className="services-list">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul>
              {service.advantages.map((adv, i) => (
                <li key={i}>✅ {adv}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
