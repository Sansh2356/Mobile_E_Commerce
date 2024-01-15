import { FaRupeeSign } from "react-icons/fa";

const ProductCard = ({ imgSrc, name, amount }) => {
  return (
    <>
      <div className="border-2 border-solid border-yellow-400 flex flex-col items-center justify-between m-2 rounded-md overflow-hidden cursor-pointer bg-white">
        <img
          src={imgSrc}
          alt="pic"
          className="w-64 h-auto m-2 p-1 hover:scale-105 transition-all ease-linear duration-200"
        />
        <div className="flex flex-row items-center justify-between bg-yellow-400 p-2 w-full">
          <span className="text-black font-light text-base mx-1">{name}</span>
          <span className="text-black font-bold text-lg flex flex-row items-center justify-between mx-1">
            <FaRupeeSign />
            {amount}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
