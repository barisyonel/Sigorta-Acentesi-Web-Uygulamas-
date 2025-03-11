import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      {/* Arka Plan Video (Eğer varsa) */}
      <video autoPlay muted loop className="hero-video">
        <source src="/assets/hero-video.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      {/* Eğer video yüklenmiyorsa bir resim gösterelim */}
      <div className="hero-image" style={{ backgroundImage: "url('/assets/hero-background.jpg')" }}></div>

      {/* Overlay (Gölgelendirme) */}
      <div className="hero-overlay"></div>

      {/* Hero İçeriği */}
      <div className="hero-content">
        <h1 className="hero-title">Geleceğinizi Güvence Altına Alın!</h1>
        <p className="hero-subtitle">Sigorta çözümlerimizle hayatınızı güvenceye alın.</p>
        <button className="cta-button">Hizmetlerimizi Keşfedin</button>
      </div>
    </div>
  );
};

export default Hero;
