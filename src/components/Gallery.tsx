import React, { useState } from 'react';
import "../styles/Gallery.css";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImageEnlarged, setIsImageEnlarged] = useState<boolean>(false);

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

    if (clientX < offsetWidth * 0.25) {
      prevImage(); // Нажатие на левую сторону
    } else if (clientX > offsetWidth * 0.75) {
      nextImage(); // Нажатие на правую сторону
    } else {
      setIsImageEnlarged(true); // Увеличиваем изображение
    }
  };

  const handleOverlayClick = () => {
    setIsImageEnlarged(false); // Закрываем увеличенное изображение
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
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <img 
            src={images[currentIndex]} 
            alt={`Enlarged item ${currentIndex}`} 
            className="popup-image" 
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
