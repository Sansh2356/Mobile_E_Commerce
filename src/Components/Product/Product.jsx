import { useParams, useNavigate } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { storeProducts } from "../../data";
import { useEffect, useState } from "react";

const Product = () => {
  const navigate = useNavigate();
  const { pid } = useParams();

  const [productData, setProductData] = useState(null);

  const wait = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };

  const getDataById = async () => {
    const data = storeProducts.filter((product, index) => {
      return product.id == pid;
    });
    await wait();
    setProductData(...data);
  };

  useEffect(() => {
    getDataById();
  }, []);

  return (
    <>
      <section className="w-full min-h-screen bg-black text-white flex flex-col lg:flex-row items-center lg:items-start">
        {!productData ? (
          <h1 className="text-6xl text-white text-center w-full mt-10">
            Loading...
          </h1>
        ) : (
          <>
            <div className="w-fit lg:w-1/2 lg:min-h-screen flex flex-col items-center">
              <h1 className="uppercase text-slate-300 font-semibold text-3xl m-2">
                {productData.title}
              </h1>
              <img
                src={`/images/${productData.img}`}
                alt="product"
                className="w-[75%] md:w-[50%] lg:w-[80%] m-2"
              />
            </div>
            <div className="m-2 p-2 lg:w-1/2 lg:h-screen lg:overflow-auto">
              <h3 className="text-2xl text-white font-black flex flex-row items-center justify-between">
                Model:
                <span className="text-yellow-600 font-mono">
                  {productData.title}
                </span>
              </h3>
              <h3 className="text-2xl text-white font-black flex flex-row items-center justify-between">
                Made by:
                <span className="text-yellow-600 font-mono">
                  {productData.company}
                </span>
              </h3>
              <h3 className="text-2xl text-white font-black flex flex-row items-center justify-between">
                Price:
                <span className="flex flex-row items-center justify-between">
                  <FaRupeeSign />
                  <span className="text-yellow-600 font-mono">
                    {productData.price}
                  </span>
                </span>
              </h3>
              <h3 className="text-2xl text-white font-black flex flex-row items-center justify-between">
                In Stock:
                <span className="flex flex-row items-center justify-between">
                  Available
                  <span className="text-yellow-600 font-mono ml-1">
                    {productData.count}
                  </span>
                </span>
              </h3>
              <p className="text-xl text-slate-200 font-semibold m-2 mt-5">
                Info:
                <span className="font-light text-slate-400 mx-1">
                  {productData.info}
                </span>
              </p>
              <div className="m-1 p-2 flex flex-row items-center justify-center mt-5">
                <button
                  type="button"
                  className="px-4 py-2 shadow-sm shadow-slate-400 rounded-full border-2 border-solid border-white mx-2 text-xl font-semibold text-white bg-black"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back to Products
                </button>
                <button
                  type="button"
                  className="px-4 py-2 shadow-sm shadow-slate-400 rounded-full border-2 border-solid border-white mx-2 text-xl font-semibold text-white bg-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Product;
