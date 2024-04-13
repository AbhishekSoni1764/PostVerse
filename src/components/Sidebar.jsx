/* eslint-disable react/prop-types */
import { CNavItem, CSidebar, CSidebarBrand, CSidebarHeader, CSidebarNav } from "@coreui/react";
import CIcon from '@coreui/icons-react';
import { cilSpeedometer } from '@coreui/icons';

export default function Sidebar({ tabSelected, setTabSelected }) {
    return (
        <CSidebar className="border-end sb" narrow>
            <CSidebarHeader className="border-bottom">
                <CSidebarBrand className="sidebar-logo">SOCIALS</CSidebarBrand>
            </CSidebarHeader>
            <CSidebarNav className="sb-nav">
                <button className={`side-button ${tabSelected === "Home" && "active"}`} onClick={() => { setTabSelected("Home") }}><CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Home</CNavItem></button>
                <button className={`side-button ${tabSelected === "Create Post" && "active"}`} onClick={() => { setTabSelected("Create Post") }}><CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} />New Post</CNavItem></button>
            </CSidebarNav>
        </CSidebar >
    )
}