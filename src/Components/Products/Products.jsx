import ProductCard from "./ProductCard";
import { storeProducts } from "../../data";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="min-h-screen w-full flex flex-col items-center bg-black">
        <h1 className="m-2 text-4xl font-bold md:text-6xl leading-tight tracking-normal text-slate-400">
          Our Products
        </h1>
        <div className="w-full p-3 flex flex-col md:flex-row flex-wrap items-center justify-start">
          {storeProducts.map((product) => (
            <ProductCard
              key={product.id}
              imgSrc={`/images/${product.img}`}
              name={product.title}
              amount={product.price}
              clickhandler={() => {
                navigate(`/product/${product.id}`);
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
