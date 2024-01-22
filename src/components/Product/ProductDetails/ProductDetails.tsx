import ProductPrice from "./ProductPrice/ProductPrice";

const ProductDetails = () => {
  return (
    <section>
      <div className="flex flex-col gap-3">
        <h3>sneaker company</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <ProductPrice />
    </section>
  );
};

export default ProductDetails;
