import { useState } from "react";
import "../styles/faq.css";

const faqData = [
  {
    question: "Sigorta poliçesi nedir?",
    answer: "Sigorta poliçesi, belirli bir süre boyunca geçerli olan ve sigortalıyı belirli risklere karşı koruyan resmi bir sözleşmedir."
  },
  {
    question: "Hangi sigorta türleri sunuyorsunuz?",
    answer: "Araç, sağlık, konut, seyahat, işyeri ve hayat sigortası hizmetleri sunuyoruz."
  },
  {
    question: "Sigorta primleri nasıl hesaplanır?",
    answer: "Sigorta primleri, yaşınız, sağlık durumunuz, sigortalı olmak istediğiniz şeyin değeri gibi faktörlere bağlı olarak hesaplanır."
  },
  {
    question: "Sigorta poliçemi nasıl iptal edebilirim?",
    answer: "Sigorta poliçenizi iptal etmek için müşteri hizmetlerimizle iletişime geçebilirsiniz."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>Sıkça Sorulan Sorular</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
            </button>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
