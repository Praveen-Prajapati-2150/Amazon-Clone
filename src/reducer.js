export const initialState = {
  // basket: [
  //   {
  //     id: "100",
  //     title: "New Apple Macbook",
  //     price: 4983.34,
  //     rating: 4,
  //     image: "https://m.media-amazon.com/images/I/41UD9vNsIjS._AC_SY200_.jpg",
  //   },
  //   {
  //     id: "101",
  //     title: "New Apple Macbook",
  //     price: 4983.34,
  //     rating: 4,
  //     image: "https://m.media-amazon.com/images/I/41UD9vNsIjS._AC_SY200_.jpg",
  //   },
  // ],
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "Set_User":
      return{
        ...state,
        user: action.user,
      }
    case "Add_To_Basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "Remove_From_Basket":
      // we cloned the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as it not available`
        );
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
}

export default reducer;
