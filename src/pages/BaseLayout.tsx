import { Outlet } from "react-router-dom";
import { Footer } from "../assets/Footer/Footer";
import { Navbar } from "../components/Home/Navbar/Navbar";

export function BaseLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
