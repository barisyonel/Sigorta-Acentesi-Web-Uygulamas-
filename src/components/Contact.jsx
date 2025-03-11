import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Bizimle İletişime Geçin</h1>
      <p>Herhangi bir sorunuz varsa, aşağıdaki bilgileri kullanarak bizimle iletişime geçebilirsiniz.</p>

      <div className="contact-info">
        <div className="contact-card">
          <h2>📍 Adres</h2>
          <p>İstanbul, Türkiye</p>
        </div>
        
        <div className="contact-card">
          <h2>📞 Telefon</h2>
          <p><a href="tel:+902123456789">+90 212 345 67 89</a></p>
        </div>
        
        <div className="contact-card">
          <h2>📧 E-Posta</h2>
          <p><a href="mailto:info@sigortafirmasi.com">info@sigortafirmasi.com</a></p>
        </div>
      </div>

      {/* Harita Bölümü */}
      <div className="contact-map">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.2919286499986!2d28.9784!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9aaf1b6b8b7%3A0x1082d2b5a6a482f!2sİstanbul!5e0!3m2!1str!2str!4v1643971234567"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* İletişim Formu */}
      <div className="contact-form-container">
        <h2>Bizimle İletişime Geçin</h2>
        <form className="contact-form">
          <label>Adınız Soyadınız</label>
          <input type="text" placeholder="Adınızı girin" required />

          <label>E-Posta Adresiniz</label>
          <input type="email" placeholder="E-Posta adresinizi girin" required />

          <label>Mesajınız</label>
          <textarea placeholder="Mesajınızı buraya yazın..." rows="5" required></textarea>

          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
