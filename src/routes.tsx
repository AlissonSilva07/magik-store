import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BaseLayout } from "./pages/BaseLayout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductPage } from "./pages/ProductPage";
import CartProvider from "./context/cart-context";
import FilterProvider from "./context/filter-context";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <FilterProvider>
                <CartProvider>
                    <Routes>
                        <Route path="/" element={<BaseLayout />}>
                            <Route index element={<Home />} />
                            <Route path="products" element={<Products />} />
                            <Route path="products/:productId" element={<ProductPage />} />
                        </Route>
                    </Routes>
                </CartProvider>
            </FilterProvider>
        </BrowserRouter>
    );
}
