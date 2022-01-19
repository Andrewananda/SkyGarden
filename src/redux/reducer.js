import {
  ADD_QUANTITY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
} from './constants';

const INITIAL_STATE = {
  products: [],
  addedProducts: [],
  total: 0,
};

export default function (state = INITIAL_STATE, action) {
  if (action.type === ADD_TO_CART) {
    //check if the action id exists in the addedItems
    let existed_item = state.addedProducts.find(
      item => action.payload.productId === item.productId,
    );

    if (existed_item) {
      existed_item.quantity += 1;
      return {
        ...state,
        total: state.total + existed_item.stock_record_price_retail,
      };
    } else {
      action.payload.quantity = 1;
      //calculating the total
      let newTotal = state.total + action.payload.stock_record_price_retail;

      return {
        ...state,
        addedProducts: [...state.addedProducts, action.payload],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_PRODUCT) {
    let exists = state.addedProducts.find(
      item => item.productId === action.payload,
    );
    if (exists) {
      //check quantity count
      if (exists.quantity > 1) {
        exists.quantity -= 1;
        let newTotal = state.total - exists.stock_record_price_retail;
        return {
          ...state,
          total: newTotal,
        };
      } else {
        //just override the whole count
        let new_items = state.addedProducts.filter(
          item => action.payload !== item.productId,
        );
        let itemToRemove = state.addedProducts.find(
          item => action.payload === item.productId,
        );

        let newTotal =
          state.total -
          itemToRemove.stock_record_price_retail * itemToRemove.quantity;
        return {
          ...state,
          addedProducts: new_items,
          total: newTotal,
        };
      }
    }
  }
  if (action.type === REMOVE_FROM_CART) {
    let exists = state.addedProducts.find(
      item => item.productId === action.payload,
    );
    if (exists) {
      let new_items = state.addedProducts.filter(
        item => action.payload !== item.productId,
      );
      let itemToRemove = state.addedProducts.find(
        item => action.payload === item.productId,
      );

      let newTotal =
        state.total -
        itemToRemove.stock_record_price_retail * itemToRemove.quantity;
      return {
        ...state,
        addedProducts: new_items,
        total: newTotal,
      };
    }
  }
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.addedProducts.find(
      item => item.productId === action.payload,
    );
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.stock_record_price_retail;
    return {
      ...state,
      total: newTotal,
    };
  }
  return state;
}
