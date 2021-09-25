import React from 'react';
import Button from './components/button/Button';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

const Main = ({ logoutFunction, sidebarMode, setSidebarMode }) => {
    return (
        <div className="app-container">
            <Navbar setSidebarMode={setSidebarMode} sidebarMode={sidebarMode} />
            <Sidebar
                sidebarMode={sidebarMode}
                logoutFunction={logoutFunction}
            />
        </div>
    );
};

export default Main;
