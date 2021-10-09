import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Logo from '../logo/Logo';
import Pic from '../pic/Pic';
import './navbar.css';

const Navbar = () => {
    const { setSidebarMode, sidebarMode, currentUser, handleSetLoadData } =
        useContext(UserContext);

    return (
        <nav>
            <Logo className="navbar-logo" />
            <div className="navlink-container">
                <button
                    className={
                        sidebarMode === 'dm'
                            ? 'nav-link nav-link-active'
                            : 'nav-link'
                    }
                    onClick={() => {
                        setSidebarMode('dm');
                        handleSetLoadData();
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                    </svg>
                </button>
                <button
                    className={
                        sidebarMode === 'channel'
                            ? 'nav-link nav-link-active'
                            : 'nav-link'
                    }
                    onClick={() => {
                        setSidebarMode('channel');
                        handleSetLoadData();
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                </button>
                <button
                    className={
                        sidebarMode === 'search'
                            ? 'nav-link nav-link-active'
                            : 'nav-link'
                    }
                    onClick={() => {
                        setSidebarMode('search');
                        handleSetLoadData();
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
            <button
                className={
                    sidebarMode === 'user'
                        ? 'nav-link nav-link-active'
                        : 'nav-link'
                }
                onClick={() => setSidebarMode('user')}
            >
                <Pic id={currentUser.id} name={currentUser.email} />
            </button>
        </nav>
    );
};

export default Navbar;
