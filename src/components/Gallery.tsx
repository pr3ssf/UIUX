import React, { useState } from 'react';
import "../styles/Gallery.css";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextImage = () => {
    console.log("Next image");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevImage = () => {
    console.log("Previous image");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = event;
    const { offsetWidth } = currentTarget;

    // Определяем, на какую сторону было нажато
    if (clientX < offsetWidth * 0.25) {
      prevImage(); // Нажатие на левую сторону
    } else if (clientX > offsetWidth * 0.75) {
      nextImage(); // Нажатие на правую сторону
    }
  };

  return (
    <div className="gallery-container" onClick={handleImageClick}>
      <div className="gallery-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery item ${index}`} className="gallery-image" />
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
    </div>
  );
};

export default Gallery;