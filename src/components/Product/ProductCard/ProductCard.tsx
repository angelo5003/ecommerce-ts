import ProductImage from "../../../assets/images/image-product-1-thumbnail.jpg";
import { FaTrashAlt } from "react-icons/fa";

const ProductCard = () => {
  return (
    <section className="m-4 w-80">
      <div className="flex justify-between items-center">
        <img className="w-14" src={ProductImage} alt="product-img" />
        <div>
          <p>Fall Limited Edition Sneakers</p>
          <p>Hello world</p>
        </div>
        <button>
          <FaTrashAlt />
        </button>
      </div>
    </section>
  );
};

export default ProductCard;
