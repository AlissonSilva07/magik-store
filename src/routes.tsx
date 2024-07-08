import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BaseLayout } from "./pages/BaseLayout";
import { Home } from "./pages/Home";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<Home />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
