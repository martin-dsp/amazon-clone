// Understand >> Re(act State Pro)ducer => Reducer
// reduce = to change sth into a simpler or more general form
// [givenState].reduce([specificRule])=>changedState

export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      // Logic for revmoing item from basket

      // we cloned the basket
      let newBasket = [...state.basket];

      // 나중에 쓰기 좋을 듯! >> '찜' 기능
      ////////////////////////////////////////////////////////////////////////////
      // we check to see if product exists,
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in a basket`
        );
      }
      ////////////////////////////////////////////////////////////////////////////

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
