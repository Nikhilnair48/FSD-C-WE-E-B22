export const initialCartState = { items: [] };

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        // increment quantity
        return {
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        };
      }
      // add new item
      return {
        items: [
          ...state.items,
          { ...action.payload, quantity: 1 }
        ]
      };
    }

    case 'REMOVE_FROM_CART': {
      return {
        items: state.items
          .map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity - 1 }
              : i
          )
          .filter(i => i.quantity > 0)
      };
    }

    default:
      return state;
  }
}