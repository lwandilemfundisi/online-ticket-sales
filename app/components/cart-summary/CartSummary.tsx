"use client";

import React, {useContext} from "react";
import { CartSummaryContext } from "@/contexts/CartSummaryProvider";

function CartSummary(){

    const {cartSummary} = useContext(CartSummaryContext);
 
    return (
        <div className="input-group d-flex align-items-center justify-content-center">
            <span className="input-group-text"><i className="fa fa-shopping-cart pe-4"></i>{cartSummary.totItems}</span>
            <span className="input-group-text">{cartSummary.totCost}</span>
        </div>
    );
}

export default CartSummary;