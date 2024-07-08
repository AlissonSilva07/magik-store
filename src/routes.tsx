import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BaseLayout } from "./pages/BaseLayout";
import { Home } from "./pages/Home";
import { Products } from "./components/Products/Products";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="products" element={<Products />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
