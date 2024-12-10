import React, { useState } from 'react';
import "../styles/Gallery.css";

// Import SVGs
import leftArrow from "../assets/arrows/map-arrow-left-svgrepo-com.svg";
import rightArrow from "../assets/arrows/map-arrow-right-svgrepo-com.svg";
import squareArrow from "../assets/arrows/map-arrow-square-svgrepo-com.svg";

interface GalleryProps {
  images: string[];
  userHeight?: string;
  userWidth?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, userHeight, userWidth }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImageEnlarged, setIsImageEnlarged] = useState<boolean>(false);
  const [isHiding, setIsHiding] = useState<boolean>(false); // For animation

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleOverlayClick = () => {
    setIsHiding(true); // Start hide animation
    setTimeout(() => {
      setIsHiding(false); // Reset state
      setIsImageEnlarged(false); // Close enlarged image
    }, 300); // Timeout duration equals animation length
  };

  return (
    <div className="gallery-container" style={{ height: userHeight || 'auto', width: userWidth || 'auto' }}>
      <div
        className="gallery-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery item ${index}`}
            className="gallery-image"
          />
        ))}
      </div>

      {/* Interaction zones */}
      <div className="interaction-zone left-zone" onClick={prevImage}>
        <img src={leftArrow} alt="Previous" className="interaction-icon" />
      </div>

      <div className="interaction-zone right-zone" onClick={nextImage}>
        <img src={rightArrow} alt="Next" className="interaction-icon" />
      </div>

      <div className="interaction-zone center-zone" onClick={() => setIsImageEnlarged(true)}>
        <img src={squareArrow} alt="Enlarge" className="interaction-icon" />
      </div>

      {/* Indicators */}
      <div className="indicator-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
          ></span>
        ))}
      </div>

      {/* Enlarged image popup */}
      {isImageEnlarged && (
        <div
          className={`popup-overlay ${isHiding ? "hidden" : ""}`}
          onClick={handleOverlayClick}
        >
          <img
            src={images[currentIndex]}
            alt={`Enlarged item ${currentIndex}`}
            className={`popup-image ${isHiding ? "hidden" : ""}`}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
