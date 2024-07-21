import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Cart } from "../components/Cart/Cart";
import { useContext } from "react";
import { ProductContext } from "../context/product-context";

export function BaseLayout() {
    const { isOpenCart } = useContext(ProductContext)
    return (
        <>
            <Navbar />
            {isOpenCart && <Cart />}
            <Outlet />
            <Footer />
        </>
    );
}
