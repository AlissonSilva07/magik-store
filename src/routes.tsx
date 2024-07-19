import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BaseLayout } from "./pages/BaseLayout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import ProductProvider from "./context/product-context";
import { ProductPage } from "./pages/ProductPage";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <ProductProvider>
                <Routes>
                    <Route path="/" element={<BaseLayout />}>
                        <Route index element={<Home />} />
                        <Route path="products" element={<Products />} />
                        <Route path="products/:productId" element={<ProductPage />} />
                    </Route>
                </Routes>
            </ProductProvider>
        </BrowserRouter>
    );
}
