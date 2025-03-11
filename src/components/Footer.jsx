import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Hakkımızda</h3>
          <p>Sigorta çözümlerimizle hayatınızı güvence altına alıyoruz.</p>
        </div>

        <div className="footer-section">
          <h3>İletişim</h3>
          <p>📍 İstanbul, Türkiye</p>
          <p>📞 0(212) 123 45 67</p>
          <p>✉️ info@sigorta.com</p>
        </div>

        <div className="footer-section">
          <h3>Sosyal Medya</h3>
          <div className="social-icons">
            <a href="#"><img src="/assets/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="/assets/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="/assets/twitter.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Sigorta Firması | Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
