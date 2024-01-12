import { useState } from "react";
import imageData from "../../data/ImageData.json";
import nextIcon from "../../assets/images/icon-next.svg";
import prevIcon from "../../assets/images/icon-previous.svg";

const ImageCarrousel = () => {
  const [nextSlide, setNextSlide] = useState(1);
  const isLastSlide = nextSlide <= imageData.length - 1;

  const handleNextSlide = () => {
    console.log(`imageArray:`, isLastSlide);

    if (isLastSlide) {
      setNextSlide(nextSlide + 1);
    } else {
      setNextSlide(1);
    }

    console.log(`you clicked on the next btn`, nextSlide);
  };
  console.log(`imageData:`, imageData);

  return (
    <section>
      <h3>
        ({nextSlide} of {imageData.length})
      </h3>
      <div className="carousel h-[23rem]">
        {imageData.map((image) =>
          nextSlide === image.id ? (
            <div className="carousel-item w-full" key={image.id}>
              <img src={image.image} className="w-full" alt="product-photo" />
            </div>
          ) : null
        )}
      </div>
      <div className="button-container">
        <button className="image-btn">
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
