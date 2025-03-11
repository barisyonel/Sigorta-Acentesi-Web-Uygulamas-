import "../styles/claims.css";

const Claims = () => {
  return (
    <div className="claims-page">
      <h1>Hasar İşlemleri</h1>
      <p>Sigorta hasarınızı hızlı ve kolay bir şekilde bildirin.</p>

      <div className="claims-steps">
        <div className="claims-step">
          <h2>📄 Hasar Dosyanızı Hazırlayın</h2>
          <p>Hasarla ilgili tüm belgeleri (fotoğraf, tutanak vb.) eksiksiz hazırlayın.</p>
        </div>

        <div className="claims-step">
          <h2>📩 Başvurunuzu Gönderin</h2>
          <p>Formu doldurarak online olarak hasar bildiriminde bulunun.</p>
        </div>

        <div className="claims-step">
          <h2>📞 Müşteri Temsilcisi Sizi Arayacak</h2>
          <p>Başvurunuz alındıktan sonra müşteri temsilcimiz sizinle iletişime geçecektir.</p>
        </div>
      </div>

      {/* Hasar Bildirim Formu */}
      <div className="claims-form-container">
        <h2>Hasar Bildirim Formu</h2>
        <form className="claims-form">
          <label>Adınız Soyadınız</label>
          <input type="text" placeholder="Adınızı girin" required />

          <label>Poliçe Numarası</label>
          <input type="text" placeholder="Poliçe numaranızı girin" required />

          <label>Hasar Türü</label>
          <select required>
            <option value="">Seçiniz</option>
            <option value="trafik">Trafik Kazası</option>
            <option value="konut">Konut Hasarı</option>
            <option value="saglik">Sağlık Hasarı</option>
            <option value="seyahat">Seyahat Hasarı</option>
          </select>

          <label>Hasar Açıklaması</label>
          <textarea placeholder="Hasarın detaylarını yazın..." rows="5" required></textarea>

          <button type="submit">Bildirimi Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default Claims;
