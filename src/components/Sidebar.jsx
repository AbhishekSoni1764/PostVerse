/* eslint-disable react/prop-types */
import { CNavItem, CSidebar, CSidebarBrand, CSidebarHeader, CSidebarNav } from "@coreui/react";
import CIcon from '@coreui/icons-react';
import { cilSpeedometer } from '@coreui/icons';
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <CSidebar className="border-end sb" narrow>
            <CSidebarHeader className="border-bottom">
                <CSidebarBrand className="sidebar-logo">SOCIALS</CSidebarBrand>
            </CSidebarHeader>
            <CSidebarNav className="sb-nav">
                <CNavItem><Link to="/" className="link"><button className="side-button" ><CIcon customClassName="nav-icon" icon={cilSpeedometer} />Home</button></Link></CNavItem>
                <CNavItem><Link to="/create-post" className="link"><button className="side-button" ><CIcon customClassName="nav-icon" icon={cilSpeedometer} />New Post</button></Link></CNavItem>
            </CSidebarNav >
        </CSidebar >
    )
}