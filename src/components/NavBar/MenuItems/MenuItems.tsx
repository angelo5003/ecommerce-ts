import { MdOutlineClose } from "react-icons/md";

type NavBarProps = {
  handleShowMenu: () => void;
};

const MenuItems: React.FC<NavBarProps> = ({ handleShowMenu }) => {
  return (
    <>
      <button
        className="absolute left-3 top-2 z-10 appearance-none"
        onClick={handleShowMenu}
      >
        <MdOutlineClose className="cursor-pointer" />
      </button>
      <ul className="menu bg-base-200 w-56 absolute top-0 h-screen items-start pt-12 text-2xl left-0">
        <li>
          <a>Collections</a>
        </li>
        <li>
          <a>Men</a>
        </li>
        <li>
          <a>Women</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </>
  );
};

export default MenuItems;
