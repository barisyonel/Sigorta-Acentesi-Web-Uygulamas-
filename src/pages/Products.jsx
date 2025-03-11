import "../styles/products.css";
import carInsurance from "../assets/images/car-insurance.jpg";
import healthInsurance from "../assets/images/health-insurance.jpg";
import homeInsurance from "../assets/images/home-insurance.jpg";
import travelInsurance from "../assets/images/travel-insurance.jpg";
import businessInsurance from "../assets/images/business-insurance.jpg";
import lifeInsurance from "../assets/images/life-insurance.jpg";

const productsData = [
  {
    title: "Araç Sigortası",
    description: "Kaza, hırsızlık ve doğal afetlere karşı aracınızı güvence altına alın.",
    advantages: ["Kaza ve hasar güvencesi", "Hırsızlık ve yangın teminatı", "Yol yardım hizmetleri"],
    image: carInsurance, // Güncellendi
  },
  {
    title: "Sağlık Sigortası",
    description: "Sağlık sigortası, hastane masraflarınızı karşılar ve sağlık hizmetlerine erişiminizi kolaylaştırır.",
    advantages: ["Tamamlayıcı ve özel sağlık sigortası", "Ameliyat ve tedavi masraflarını karşılar", "Geniş hastane ağı"],
    image: healthInsurance, // Güncellendi
  },
  {
    title: "Konut Sigortası",
    description: "Evinizi yangın, su baskını ve hırsızlığa karşı koruyun.",
    advantages: ["Yangın ve deprem teminatı", "Su baskınına karşı koruma", "Komple ev ve eşya sigortası"],
    image: homeInsurance, // Güncellendi
  },
  {
    title: "Seyahat Sigortası",
    description: "Yurt içi ve yurt dışı seyahatlerinizde sağlık ve bagaj güvenliği sağlar.",
    advantages: ["Yurt içi ve yurt dışı koruma", "Acil sağlık hizmetleri", "Kayıp bagaj teminatı"],
    image: travelInsurance, // Güncellendi
  },
  {
    title: "İş Yeri Sigortası",
    description: "İş yerinizi ve çalışanlarınızı beklenmedik risklere karşı güvence altına alın.",
    advantages: ["Yangın ve sel sigortası", "Çalışan güvenliği", "Hırsızlık teminatı"],
    image: businessInsurance, // Güncellendi
  },
  {
    title: "Hayat Sigortası",
    description: "Sevdiklerinizin geleceğini güvence altına alın ve finansal destek sağlayın.",
    advantages: ["Vefat teminatı", "Maluliyet teminatı", "Kredi borç ödeme güvencesi"],
    image: lifeInsurance, // Güncellendi
  }
];

const Products = () => {
  return (
    <div className="products-page">
      <h1>Sigorta Ürünlerimiz</h1>
      <p>Size en uygun sigorta çözümlerini sunuyoruz.</p>

      <div className="products-list">
        {productsData.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.title} loading="lazy" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <ul>
              {product.advantages.map((adv, i) => (
                <li key={i}>✅ {adv}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
