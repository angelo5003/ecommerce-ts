import { MdOutlineShoppingCart } from "react-icons/md";
const ProductPrice = () => {
  return (
    <section>
      <div className="mt-12 ">
        <div className="flex items-center justify-around gap-3">
          <p>$125.00</p>
          <p>50%</p>
          <p>$250</p>
        </div>
        <div
          className="flex items-center justify-around p-2.5 rounded-lg w-80 m-auto mt-2.5 mb-2.5"
          id="amount-btn-container"
        >
          <button className="amount-btn p-1">-</button>
          <span id="total-amount-number">3</span>
          <button className="amount-btn p-1">+</button>
        </div>
        <div className="flex justify-center flex-row">
          <button
            className="flex items-center p-5 w-80 rounded-xl justify-evenly"
            id="add-to-cart-btn"
          >
            <MdOutlineShoppingCart />
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductPrice;
