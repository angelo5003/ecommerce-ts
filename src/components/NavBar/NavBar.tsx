import { useState } from "react";
import profileImg from "../../assets/images/image-avatar.png";
import MenuItems from "./MenuItems/MenuItems";
import { MdOutlineShoppingCart } from "react-icons/md";
import Modal from "../Modal/Modal";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);

  const handleShowMenu = () => {
    setMenu(!menu);
  };

  const handleShowModal = () => {
    setModal(!modal);
  };

  return (
    <header>
      <nav>
        <div className="navbar bg-base-100 md:hidden">
          <div className="flex-none">
            <button
              className="btn btn-square btn-ghost"
              onClick={handleShowMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          {menu ? <MenuItems handleShowMenu={handleShowMenu} /> : null}

          <div className="flex-1">
            <a className="btn btn-ghost text-3xl font-normal">sneakers</a>
          </div>
          <div className="flex-none items-center">
            <MdOutlineShoppingCart
              className="w-6 text-[3.1em] mr-5 cursor-pointer"
              onClick={handleShowModal}
            />
            {modal ? <Modal handleShowModal={handleShowModal} /> : null}

            <img src={profileImg} alt="profile" className="w-12" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
