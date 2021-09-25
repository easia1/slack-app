import './sidebar.css';
import Button from '../button/Button';
import React from 'react';

const Sidebar = ({ sidebarMode, logoutFunction }) => {
    if (sidebarMode === 'dm') {
        return (
            <div className="sidebar">
                <h1 className="sidebar-title">Direct messages</h1>
            </div>
        );
    } else if (sidebarMode === 'channel') {
        return (
            <div className="sidebar">
                <h1 className="sidebar-title">Channels</h1>
            </div>
        );
    } else if (sidebarMode === 'search') {
        return (
            <div className="sidebar">
                <h1 className="sidebar-title">Search</h1>
            </div>
        );
    } else if (sidebarMode === 'user') {
        return (
            <div className="sidebar">
                <h1 className="sidebar-title">User</h1>
                <Button
                    onClick={logoutFunction}
                    text="Logout"
                    className="login-button"
                />
            </div>
        );
    }
};

export default Sidebar;
