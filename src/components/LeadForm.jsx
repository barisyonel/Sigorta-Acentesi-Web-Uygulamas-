import { useState } from "react";
import "../styles/leadform.css";

const categories = {
  "Ev ve İşyeri Sigortaları": ["İşyerim Sigortası", "Konut Sigortası"],
  "Sağlık Sigortaları": ["Tamamlayıcı Sağlık", "Özel Sağlık"],
  "Araç Sigortaları": ["Trafik Sigortası", "Kasko Sigortası"]
};

const LeadForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    tc: "",
    birthDate: "",
    phone: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.tc.match(/^[0-9]{11}$/)) newErrors.tc = "T.C. Kimlik Numaranızı kontrol ediniz.";
    if (!formData.birthDate) newErrors.birthDate = "Doğum Tarihinizi kontrol ediniz.";
    if (!formData.phone.match(/^\+90[0-9]{10}$/)) newErrors.phone = "Telefon Numaranızı kontrol ediniz.";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "E-Posta Adresinizi kontrol ediniz.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form başarıyla gönderildi!");
    }
  };

  return (
    <section className="lead-form">
      <h2>Bilgilerinizi Bırakın, <strong>Sizi Arayalım</strong></h2>

      <div className="form-container">
        {/* Kategori Seçimi */}
        <div className="dropdown-container">
          <label>Kategori Seçiniz</label>
          <select value={selectedCategory} onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSelectedProduct("");
            setIsFormVisible(false);
          }}>
            <option value="">Kategori Seçiniz</option>
            {Object.keys(categories).map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Ürün Seçimi */}
        {selectedCategory && (
          <div className="dropdown-container">
            <label>Ürün Seçiniz</label>
            <select value={selectedProduct} onChange={(e) => {
              setSelectedProduct(e.target.value);
              setIsFormVisible(true);
            }}>
              <option value="">Ürün Seçiniz</option>
              {categories[selectedCategory].map((product, index) => (
                <option key={index} value={product}>{product}</option>
              ))}
            </select>
          </div>
        )}

        {/* Form Alanları Akordeon Sistemiyle Açılacak */}
        {isFormVisible && (
          <div className="accordion">
            <div className={`accordion-item ${isFormVisible ? "open" : ""}`}>
              <label>T.C. Kimlik Numaranız *</label>
              <input
                type="text"
                value={formData.tc}
                onChange={(e) => setFormData({ ...formData, tc: e.target.value })}
                placeholder="11 Haneli Kimlik No"
                className={errors.tc ? "error" : ""}
              />
              {errors.tc && <p className="error-message">{errors.tc}</p>}
            </div>

            <div className={`accordion-item ${isFormVisible ? "open" : ""}`}>
              <label>Doğum Tarihiniz *</label>
              <input
                type="date"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                className={errors.birthDate ? "error" : ""}
              />
              {errors.birthDate && <p className="error-message">{errors.birthDate}</p>}
            </div>

            <div className={`accordion-item ${isFormVisible ? "open" : ""}`}>
              <label>+90 Telefon Numaranız *</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+90 5XX XXX XXXX"
                className={errors.phone ? "error" : ""}
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>

            <div className={`accordion-item ${isFormVisible ? "open" : ""}`}>
              <label>E-Posta Adresiniz</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@mail.com"
                className={errors.email ? "error" : ""}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
          </div>
        )}

        {/* Gönder Butonu */}
        <button className="submit-button" onClick={handleSubmit}>BANA ULAŞIN</button>
      </div>
    </section>
  );
};

export default LeadForm;
