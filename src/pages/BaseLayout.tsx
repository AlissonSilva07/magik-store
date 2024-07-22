import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Cart } from "../components/Cart/Cart";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";

export function BaseLayout() {
    const { isOpenCart } = useContext(CartContext)
    return (
        <>
            <Navbar />
            {isOpenCart && <Cart />}
            <Outlet />
            <Footer />
        </>
    );
}
