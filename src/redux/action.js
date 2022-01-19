import {ADD_QUANTITY, ADD_TO_CART, REMOVE_PRODUCT} from './constants';

export function addProduct(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function removeItem(id) {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
}

export function addQuantity(id) {
  return {
    type: ADD_QUANTITY,
    payload: id,
  };
}
