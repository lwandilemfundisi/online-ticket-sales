"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { CartSummaryModel } from "../interfaces/CartSummaryModel";

export const CartSummaryContext = createContext<{
    cartSummary: CartSummaryModel;
    setCartSummary: Dispatch<SetStateAction<CartSummaryModel>>;
}>
({
    cartSummary: {totItems: 0, totCost: 0},
    setCartSummary: ()=>{}
});

function CartSummaryProvider({children} : { children: ReactNode }) {
    const [cartSummary, setCartSummary] = useState<CartSummaryModel>({totItems: 0, totCost: 0});

    return (
        <CartSummaryContext.Provider value={{cartSummary, setCartSummary}}>
            {children}
        </CartSummaryContext.Provider>
    );
}

export default CartSummaryProvider;