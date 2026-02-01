"use client";

import {useContext} from "react";
import { CartSummaryContext } from "@/contexts/CartSummaryProvider";
import currencyFormatter from "@/helpers/currenyFormatter";
import Link from "next/link";
import styles from "./CartSummary.module.css"

function CartSummary(){

    const {cartSummary} = useContext(CartSummaryContext);
 
    return (
        <Link href="/cart" className={styles.cartlink}>
            <div className="input-group d-flex align-items-center justify-content-center">
                <span className="input-group-text"><i className="fa fa-shopping-cart pe-4"></i>{cartSummary.totItems}</span>
                <span className="input-group-text">{currencyFormatter.format(cartSummary.totCost)}</span>
            </div>
        </Link>
    );
}

export default CartSummary;