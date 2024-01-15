import LOGO from "../../assets/navbar_logo.png";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex flex-row px-2 py-4 items-center justify-between bg-gradient-to-r from-yellow-600 via-orange-400 to-white">
        <img
          src={LOGO}
          alt="logo"
          className="w-11 h-11 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <h1
          className="text-6xl font-black bg-gradient-to-r from-red-800 to-orange-800 bg-clip-text text-transparent tracking-tight leading-none cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Ecom
        </h1>
        <button
          type="button"
          onClick={() => {
            navigate("/cart");
          }}
          className="flex flex-row items-center justify-between gap-2 border-2 border-solid border-orange-500 p-3 bg-orange-500 text-white shadow-sm shadow-slate-300 mx-2"
        >
          <span>
            <FaCartPlus />
          </span>
          <span className="font-black text-xl">Cart</span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
