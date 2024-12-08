import React, { useState } from 'react';
import "../styles/Gallery.css";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="gallery-container">
      <button className="arrow arrow-left" onClick={prevImage}>
        &#8592;
      </button>
      <div className="gallery-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery item ${index}`} className="gallery-image" />
        ))}
      </div>
      <button className="arrow arrow-right" onClick={nextImage}>
        &#8594;
      </button>
    </div>
  );
};

export default Gallery;
