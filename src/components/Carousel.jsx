import { useState, useEffect } from "react";
import "../styles/carousel.css";

// Görselleri import et
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

const slides = [
  { image: slide1,},
  { image: slide2,},
  { image: slide3,},
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Her 5 saniyede bir slayt değişir.

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-btn left" onClick={goToPrevious}>‹</button>
      <div className="carousel-slide">
        <img src={slides[currentIndex].image} alt={slides[currentIndex].title} loading="lazy" />
      
      </div>
      <button className="carousel-btn right" onClick={goToNext}>›</button>
    </div>
  );
};

export default Carousel;
