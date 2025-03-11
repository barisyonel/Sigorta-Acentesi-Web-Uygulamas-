import "../styles/financialadvice.css";

const FinancialAdvice = () => {
  return (
    <div className="financial-advice-page">
      <h1>Finansal Danışmanlık</h1>
      <p>Uzmanlarımızla bütçenizi yönetin, yatırım ve sigorta planlamalarınızı yapın.</p>

      <div className="advice-sections">
        <div className="advice-card">
          <h2>📈 Yatırım Planlaması</h2>
          <p>Geleceğe yönelik sağlam bir yatırım planı oluşturmanıza yardımcı oluyoruz.</p>
        </div>

        <div className="advice-card">
          <h2>🛡 Sigorta Danışmanlığı</h2>
          <p>Sigorta seçeneklerini anlamanız ve en doğru planı seçmeniz için rehberlik sunuyoruz.</p>
        </div>

        <div className="advice-card">
          <h2>💰 Bütçe Yönetimi</h2>
          <p>Gelirinizi daha iyi yönetmek için kişisel finans stratejileri sunuyoruz.</p>
        </div>
      </div>

      {/* Finansal Danışmanlık Formu */}
      <div className="advice-form-container">
        <h2>Finansal Danışmanlık Alın</h2>
        <form className="advice-form">
          <label>Adınız Soyadınız</label>
          <input type="text" placeholder="Adınızı girin" required />

          <label>E-Posta Adresiniz</label>
          <input type="email" placeholder="E-Posta adresinizi girin" required />

          <label>Danışmanlık Almak İstediğiniz Konu</label>
          <select required>
            <option value="">Seçiniz</option>
            <option value="yatirim">Yatırım Planlaması</option>
            <option value="sigorta">Sigorta Danışmanlığı</option>
            <option value="butce">Bütçe Yönetimi</option>
          </select>

          <label>Mesajınız</label>
          <textarea placeholder="Sorularınızı buraya yazın..." rows="5" required></textarea>

          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default FinancialAdvice;
