const items = localStorage.getItem('cartitems') != null
? JSON.parse(localStorage.getItem('cartitems')):
[];

const count = localStorage.getItem('totalcartcount') != null
? JSON.parse(localStorage.getItem('totalcartcount')):
0;

const setItemFun = (item,cartcount) =>{
  localStorage.setItem('cartitems', JSON.stringify(item));

  localStorage.setItem('totalcartcount', JSON.stringify(cartcount));
}

//state.cartItems.map(item => item)
//state.cartCount
const initialState = {
  cartCount: count,
  cartItems: items,
  order: []
};


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingProductIndex].quantity += 1;
        setItemFun(updatedCartItems,state.cartCount+1);
        return {
          ...state,
          cartCount: state.cartCount + 1,
          cartItems: updatedCartItems,
        };
      } else {
        setItemFun([...state.cartItems, { ...action.payload, quantity: 1 }],state.cartCount+1);
        return {
          ...state,
          cartCount: state.cartCount + 1,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      const updatedCartItemsRemove = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      setItemFun(updatedCartItemsRemove,state.cartCount - action.payload.quantity);
      return {
        ...state,
        cartCount: state.cartCount - action.payload.quantity,
        cartItems: updatedCartItemsRemove,
      };

    case "INCREMENT_CART_ITEM":
      const incrementProductIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (incrementProductIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[incrementProductIndex].quantity += 1;
        setItemFun(updatedCartItems,state.cartCount+1);
        return {
          ...state,
          cartCount: state.cartCount + 1,
          cartItems: updatedCartItems,
        };
      }
      setItemFun(state.cartItems,state.cartCount);
      return state;

    case "DECREMENT_CART_ITEM":
      const decrementProductIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (
        decrementProductIndex !== -1 &&
        state.cartItems[decrementProductIndex].quantity > 1
      ) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[decrementProductIndex].quantity -= 1;
        setItemFun(updatedCartItems,state.cartCount-1);
        return {
          ...state,
          cartCount: state.cartCount - 1,
          cartItems: updatedCartItems,
        };
      } else {
        setItemFun(state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),state.cartCount-1);
        return {
          ...state,
          cartCount: state.cartCount - 1,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      }

    case "SHOW_ORDER":
      setItemFun(state.cartItems,state.cartCount);
      return {
        ...state,
        order: state.cartItems
      };

    case "CLEAR_CART":
      setItemFun([],0);
      return {
        ...state,
        cartCount: 0,
        cartItems: [],
      };

    default:
      return state;
  }
  
};

export default cartReducer;


