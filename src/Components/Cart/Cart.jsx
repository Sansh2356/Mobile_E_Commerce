import { FaRupeeSign } from "react-icons/fa";
import Card from "./Card";
import { storeProducts } from "../../data";

const Cart = () => {
  return (
    <>
      <section className="min-h-screen w-full bg-white flex flex-col">
        <h1 className="text-5xl font-black m-1 p-2 text-black">My Cart</h1>
        <hr className="mx-4 my-2 bg-slate-900" />
        <div className="flex flex-row flex-wrap items-start justify-start">
          {storeProducts.map((product) => (
            <Card
              key={product.id}
              imgSrc={`/images/${product.img}`}
              name={product.title}
              amount={product.price}
              count={product.total}
            />
          ))}
        </div>
        <div className="flex flex-col items-start justify-between p-2 m-2">
          <h3 className="flex flex-row justify-between w-full p-3 m-1 items-center gap-2 text-black font-extrabold text-3xl">
            Subtotal:
            <span className="flex flex-row items-center justify-center">
              <FaRupeeSign className="text-xl" />
              <span className="text-xl font-bold text-black">0</span>
            </span>
          </h3>
          <h3 className="flex flex-row justify-between w-full p-3 m-1 items-center gap-2 text-black font-extrabold text-3xl">
            Tax:
            <span className="flex flex-row items-center justify-center">
              <FaRupeeSign className="text-xl" />
              <span className="text-xl font-bold text-black">0</span>
            </span>
          </h3>
          <hr className="h-1 bg-black w-full" />
          <h3 className="flex flex-row justify-between bg-slate-200 w-full p-2 m-1 items-center gap-2 text-black font-extrabold text-3xl">
            Cart Total:
            <span className="flex flex-row items-center justify-center">
              <FaRupeeSign className="text-xl" />
              <span className="text-xl font-bold text-black">0</span>
            </span>
          </h3>
        </div>
        <div className="flex flex-row items-center m-2 p-2">
          <button
            type="button"
            className="px-4 py-2 mx-1 my-2 text-xl border-2 border-solid border-yellow-500 font-semibold text-yellow-500 bg-black rounded-full"
          >
            Clear Cart
          </button>
          <button
            type="button"
            className="px-4 py-2 mx-1 my-2 text-xl border-2 border-solid border-yellow-500 font-semibold text-yellow-500 bg-black rounded-full"
          >
            Pay Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Cart;
