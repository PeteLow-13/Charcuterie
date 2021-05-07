import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConsstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      // new add in cart item info
      const item = action.payload;
      // check if itme already in shopcart
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        // replace product info if already in shpocart
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        // push to the end of array if is new product
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
