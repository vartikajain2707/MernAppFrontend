export const initialState = {
  cart: [],
  order: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      action.payload.quantity = 1;
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "PLUS":
      for (let i = 0; i < state.cart.length; i += 1) {
        if (state.cart[i].id === action.payload.id) {
          state.cart[i].quantity += 1;
        }
      }
      return {
        ...state,
        cart: [...state.cart],
      };
    case "MINUS":
      for (let i = 0; i < state.cart.length; i += 1) {
        if (state.cart[i].id === action.payload.id) {
          if (state.cart[i].quantity === 1) {
            state.cart.splice(i, 1);
            return {
              ...state,
              cart: [...state.cart],
            };
          } else {
            state.cart[i].quantity -= 1;
          }
        }
      }
      return {
        ...state,
        cart: [...state.cart],
      };
    case "REMOVE":
      return { state };
    default:
      return { state };
  }
};

export default reducer;