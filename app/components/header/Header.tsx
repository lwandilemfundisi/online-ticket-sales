"use client"

import { Nav, Navbar } from "react-bootstrap";
import HeaderImage from "../header-image/HeaderImage";
import CartSummary from "../cart-summary/CartSummary";

function Header(){
    return (
        <div className="row site-header">
            <div className="col-4 d-flex align-items-center justify-content-center">
                <HeaderImage/>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
                <CartSummary/>
            </div>
        </div>
    );
}

export default Header;