import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../actions/productActions";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../ThemeProvider";

const CreateProduct = () => {
  const [product, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [formError, setFormError] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.products.productAddingFailure);
  const isAdded = useSelector((state) => state.products.productAddedStatus);
  const isloading = useSelector((state) => state.products.isProductAdding);
  const { theme } = useTheme();

  useEffect(() => {
    if (error) {
      setFormError(true);
    }
  }, [error]);

  useEffect(() => {
    if (isAdded) {
      setProductName("");
      setPrice("");
      setImgUrl("");
    }
  }, [isAdded]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createProduct({
        name: product,
        price: price,
        img: imgUrl,
      })
    );
  };

  const handleProductName = (e) => {
    setProductName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleImgUrl = (e) => {
    setImgUrl(e.target.value);
  };
  return (
    <div className="main-content">
      <h1>Create a new product</h1>
      <form
        onSubmit={handleSubmit}
        className={`form-content ${theme === "light" && "form-content-white"}`}
      >
        {error && formError && (
          <div className="alert">
            <h2>Unable add product</h2>
            <p>Error...</p>
            <IoClose
              className="close-icon"
              onClick={() => {
                setFormError(false);
              }}
            />
          </div>
        )}
        <input
          placeholder="Product Name"
          type="text"
          value={product}
          onChange={handleProductName}
          required
        />
        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={handlePrice}
          required
        />
        <input
          placeholder="Image URL"
          type="url"
          value={imgUrl}
          onChange={handleImgUrl}
          required
        />
        <button type="submit" className={isloading && "button-loading"}>
          <span>Add Product</span>
          {isloading && <div className="spinner"></div>}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
