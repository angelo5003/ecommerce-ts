import { useState } from "react";

import { MdOutlineShoppingCart } from "react-icons/md";
const ProductPrice = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count >= 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <section>
      <div className="mt-12 ">
        <div className="flex items-center justify-around gap-3">
          <p className="text-2xl font-bold	">$125.00</p>
          <p id="discount" className="w-12 text-center rounded">
            50%
          </p>
          <p className="line-through	">$250</p>
        </div>
        <div
          className="flex items-center justify-around p-2.5 rounded-lg w-80 m-auto mt-2.5 mb-2.5"
          id="amount-btn-container"
        >
          <button className="amount-btn p-1" onClick={handleDecrement}>
            -
          </button>
          <span id="total-amount-number">{count}</span>
          <button className="amount-btn p-1" onClick={handleIncrement}>
            +
          </button>
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
