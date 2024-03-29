import ProductCard from "../Product/ProductCard/ProductCard";

type ModalProps = {
  handleShowModal: () => void;
};

const Modal: React.FC<ModalProps> = ({ handleShowModal }) => {
  return (
    <>
      <div id="my_modal_1" className="">
        <div className="modal-box">
          <h3 className="font-bold text-lg pb-5">Cart</h3>
          <hr />
          <ProductCard />
          <div className="content-center justify-center flex ">
            <button
              id="checkout-btn"
              className="btn p-5 w-[21.8rem] flex-nowrap"
              onClick={handleShowModal}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Modal;
