export const initialCart = [];

// add item -> ADD_ITEM
// remove item -> REMOVE_ITEM
// { type: "ADD_ITEM", item: "Book", id: 1 }
export default function cartReducer(state, action) {
    switch(action.type) {
        case "ADD_ITEM":
            return [...state, action.product];
        case "REMOVE_ITEM":
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}