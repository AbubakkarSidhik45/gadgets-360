import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

// Action Creators

export const getProduct = () => ({
  type: GET_PRODUCTS,
});

export const getProductSuccess = (products = []) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const getProductFailure = (error) => ({
  type: GET_PRODUCTS_FAILURE,
  payload: error,
});

export const addProduct = () => ({
  type: ADD_PRODUCT,
});

export const addProductSuccess = (product = {}) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

export const addProductFailure = (error) => ({
  type: ADD_PRODUCT_FAILURE,
  payload: error,
});

export const deleteProductS = (error) => ({
  type: DELETE_PRODUCT,
  payload: error,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(getProduct());
    try {
      const result = await axios.get("http://localhost:5000/api/product");
      console.log("result: ", result.data.data);
      dispatch(getProductSuccess(result.data.data));
    } catch (error) {
      console.log("error: ", error);
      dispatch(getProductFailure(error));
    }
  };
};

export const createProduct = (data) => {
  return async (dispatch) => {
    dispatch(addProduct);
    try {
      const result = await axios.post(
        "http://localhost:5000/api/product",
        data
      );
      console.log("result: ", result);
      dispatch(addProductSuccess(result.data));
    } catch (error) {
      console.log("error: ", error);
      dispatch(addProductFailure(error));
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios.delete(
        `http://localhost:5000/api/product/${id}`
      );
      console.log("result: ", result);
      dispatch(fetchProducts());
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

export const updateProduct = (id, data) => {
  console.log("data: ", data);
  return async (dispatch) => {
    try {
      const result = await axios.put(
        `http://localhost:5000/api/product/${id}`,
        data
      );
      console.log("API result: ", result);
      dispatch(fetchProducts());
    } catch (error) {
      console.error(
        "API error: ",
        error.response ? error.response.data : error.message
      );
    }
  };
};
