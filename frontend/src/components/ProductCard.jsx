import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../actions/productActions";
import ProductModal from "./UpdateProduct";
import { useState } from "react";
import { useTheme } from "../ThemeProvider";

const ProductCard = ({ name, price, image, id }) => {
  const [modelOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const handleUpdate = () => {
    dispatch(deleteProduct(id));
  };
  const handleModelClose = () => {
    setModalOpen(false);
  };
  return (
    <div className={`card-content ${theme === "light" && "card-light"}`}>
      <img src={image} className="card-img" />
      <div>{name}</div>
      <div>$ {price}</div>
      <div className="btn-container">
        <buton
          className={`card-btn ${theme === "light" && "card-btn-light"}`}
          onClick={() => setModalOpen(true)}
        >
          <FaEdit />
        </buton>
        <buton
          className={`card-btn btn-delete ${
            theme === "light" && "card-btn-light"
          }`}
          onClick={handleUpdate}
        >
          <MdDelete />
        </buton>
      </div>
      <div>
        {modelOpen && (
          <ProductModal
            productName={name}
            productPrice={price}
            productImage={image}
            id={id}
            isActive={modelOpen}
            handleModelClose={handleModelClose}
          />
        )}
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
