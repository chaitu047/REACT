import React from "react";
//import Navbar from "../components/Navbar"
import AppMenu from "../components/AppMenu/AppMenu"
import { Outlet } from "react-router-dom"
export default function Dashboard() {
    return (
        <>
        <AppMenu />
        <Outlet />
        </>
    )
}