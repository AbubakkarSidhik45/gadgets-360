import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import ProductCard from "./ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="product-heading">Current Products</div>
      {products.length <= 0 ? (
        <div className="not-found">
          No product found <a href="/create">create a product</a>
        </div>
      ) : (
        <div className="card-container">
          {products?.map((product, index) => {
            return (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                image={product.img}
                id={product._id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
