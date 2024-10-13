import PropTypes from "prop-types";
import { useState } from "react";
import { updateProduct } from "../actions/productActions";
import { useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../ThemeProvider";

const ProductModal = ({
  productName,
  productPrice,
  productImage,
  id,
  isActive,
  handleModelClose,
}) => {
  const [name, setProductName] = useState(productName || "");
  const [price, setProductPrice] = useState(productPrice || "");
  const [img, setImage] = useState(productImage || "");
  const dispatch = useDispatch();
  const {theme} = useTheme()
  const handleUpdateModel = () => {
    dispatch(updateProduct(id, { name: name, price: price, img: img }));
    handleModelClose();
  };

  if (!isActive) {
    return null;
  }
  return (
    <>
      {isActive && <div className="modal-overlay"></div>}
      <div className="modal">
        <form className={`form-content ${theme === "light" && "form-content-white"}`}>
          <input
            placeholder="Product Name"
            type="text"
            value={name}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
          <input
            placeholder="Price"
            type="number"
            value={price}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
          <input
            placeholder="Image URL"
            type="url"
            value={img}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <button type="button" onClick={handleUpdateModel}>
            <span>Add Product</span>
          </button>
        </form>
        <IoClose className="close-icon" onClick={handleModelClose} />
      </div>
    </>
  );
};

ProductModal.propTypes = {
  productName: PropTypes.string,
  productPrice: PropTypes.string,
  productImage: PropTypes.string,
  id: PropTypes.string,
  isActive: PropTypes.bool,
  handleModelClose: PropTypes.func,
};

export default ProductModal;
