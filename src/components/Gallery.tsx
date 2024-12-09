import React, { useState } from 'react';
import "../styles/Gallery.css";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImageEnlarged, setIsImageEnlarged] = useState<boolean>(false);
  const [isHiding, setIsHiding] = useState<boolean>(false); // Для анимации уменьшения

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = event;
    const { offsetWidth } = currentTarget;

    if (clientX < offsetWidth * 0.4) {
      prevImage();
    } else if (clientX > offsetWidth * 0.6) {
      nextImage();
    } else {
      setIsImageEnlarged(true);
    }
  };

  const handleOverlayClick = () => {
    setIsHiding(true); // Устанавливаем состояние для запуска анимации
    setTimeout(() => {
      setIsHiding(false); // Сбрасываем состояние
      setIsImageEnlarged(false); // Закрываем увеличенное изображение
    }, 300); // Тайм-аут равен длительности анимации
  };

  return (
    <div className="gallery-container">
      <div className="gallery-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Gallery item ${index}`} 
            className="gallery-image"
            onClick={(e) => currentIndex === index && handleImageClick(e)}
          />
        ))}
      </div>
      <div className="indicator-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
          ></span>
        ))}
      </div>

      {/* Всплывающее изображение */}
      {isImageEnlarged && (
        <div 
          className={`popup-overlay ${isHiding ? 'hidden' : ''}`} 
          onClick={handleOverlayClick}
        >
          <img 
            src={images[currentIndex]} 
            alt={`Enlarged item ${currentIndex}`} 
            className={`popup-image ${isHiding ? 'hidden' : ''}`}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
