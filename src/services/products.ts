import axios from 'axios';
import { IGetProductsResponse } from 'models';

const isProduction = process.env.NODE_ENV === 'production';

export const getProducts = async () => {
  let response: IGetProductsResponse;

  response = await axios.get(
    'https://react-shopping-cart-67954.firebaseio.com/products.json'
  );

  const { products } = response.data || [];

  return products;
};
