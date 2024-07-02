import React from "react";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <TopNav />
            <BottomNav />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;