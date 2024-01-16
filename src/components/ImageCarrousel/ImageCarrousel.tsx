import { useState } from "react";
import imageData from "../../data/ImageData.json";
import nextIcon from "../../assets/images/icon-next.svg";
import prevIcon from "../../assets/images/icon-previous.svg";

const ImageCarrousel = () => {
  // 👇 state that is keeping track of the current slide shown to the DOM
  const [currentSlide, setCurrentSlide] = useState(1);

  // 👇 check if it is the last slide
  const isLastSlide = currentSlide === imageData.length;

  // 👇 check if it is the first slide
  const isFirstSlide = currentSlide === 1;

  // 👇 function for showing next slide
  const handleNextSlide = () => {
    // 👇 if it is not the last slide, go to the next slide
    if (!isLastSlide) {
      setCurrentSlide(currentSlide + 1);
    }
    // 👇 if it is the last slide go back to the first slide
    else {
      setCurrentSlide(1);
    }
  };

  // 👇 function for prev slide
  const handlePrevSlide = () => {
    // 👇 if it is not the first slide go the previous slide
    if (!isFirstSlide) {
      setCurrentSlide(currentSlide - 1);
    }
    // 👇 if it is the first slide, go to the last slide
    else {
      setCurrentSlide(imageData.length);
    }
  };

  console.log(`currentSlideInfo:`, currentSlide);

  console.log(`imageData:`, imageData);

  return (
    <section>
      <h3 className="pl-1.5">
        ({currentSlide} of {imageData.length})
      </h3>
      <div className="carousel h-[23rem]">
        {imageData.map((image) =>
          currentSlide === image.id ? (
            <div className="carousel-item w-full" key={image.id}>
              <img src={image.image} className="w-full" alt="product-photo" />
            </div>
          ) : null
        )}
      </div>
      <div className="button-container">
        <button className="image-btn" onClick={handlePrevSlide}>
          <img src={prevIcon} alt="prev-icon" />
        </button>
        <button className="image-btn" onClick={handleNextSlide}>
          <img src={nextIcon} alt="next-icon" />
        </button>
      </div>
    </section>
  );
};

export default ImageCarrousel;
