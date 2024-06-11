
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product
});

export const removeFromCart = (id, quantity) => ({
  type: 'REMOVE_FROM_CART',
  payload: { id, quantity }
});

export const incrementCartItem = (id) => ({
  type: 'INCREMENT_CART_ITEM',
  payload: { id }
});

export const decrementCartItem = (id) => ({
  type: 'DECREMENT_CART_ITEM',
  payload: { id }
});

export const showOrder = (product) => ({
  type: 'SHOW_ORDER',
  payload: product
});

export const clearCart=() =>({
  type: 'CLEAR_CART'
})