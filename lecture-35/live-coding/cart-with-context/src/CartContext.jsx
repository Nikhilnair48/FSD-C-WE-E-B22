import { useReducer } from "react";
import { createContext } from "react";
import cartReducer, { initialCart } from "./reducer";
import { useContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, initialCart);

    return (
        <CartStateContext.Provider value={cart}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    );
}

export function useCart() {
    return useContext(CartStateContext);
}

export function useCartDispatch() {
    return useContext(CartDispatchContext);
}