import { createContext, useState } from 'react';
import { Redirect } from 'react-router';

/* ------------------ How to access contents of useContext ------------------ */
// 1. Go to your component file where you want to access the content.
// 2. Type const { name of prop } = useContext(UserContext)

/* ------------------------------- useContext ------------------------------- */
//Creating a context can help pass down props to several child components without having to pass them down through every parent component.
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    //Current user information
    const [currentUser, setUser] = useState(null);

    //Access tokens
    const [currentHeaders, setHeaders] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');

    //Save user to local storage
    const localStorageLogin = (data) => {
        localStorage.setItem('User', JSON.stringify(data));
    };

    //Sidebar state
    const [sidebarMode, setSidebarMode] = useState('dm');

    //List of data
    const [channelList, setChannelList] = useState('');
    const [allUsers, setAllUsers] = useState('');
    const [contactList, setContactList] = useState('');

    //For recent messages
    const [allChannelMessages, setAllChannelMessages] = useState([]);

    //Will be used for useEffect for reloading data
    const [loadData, setLoadData] = useState(false);

    //Function for toggling data reload
    const handleSetLoadData = () => {
        setLoadData(!loadData);
    };

    //Logout function
    const logoutFunction = () => {
        localStorage.setItem('User', null);
        setUser(null);
        setHeaders(null);
        setIsLoggedIn(false);
        setLoginMessage('');
        setSidebarMode('dm');
        return <Redirect to="/login" />;
    };

    //Show new channel modal
    const [showModal, setShowModal] = useState(false);

    //Remove @___.___ from email
    const removeEmail = (email) => {
        return email.split('@')[0];
    };

    return (
        <UserContext.Provider
            value={{
                currentUser,
                setUser,
                currentHeaders,
                setHeaders,
                isLoggedIn,
                setIsLoggedIn,
                loginMessage,
                setLoginMessage,
                sidebarMode,
                setSidebarMode,
                channelList,
                setChannelList,
                allUsers,
                setAllUsers,
                contactList,
                setContactList,
                allChannelMessages,
                setAllChannelMessages,
                loadData,
                setLoadData,
                handleSetLoadData,
                logoutFunction,
                localStorageLogin,
                showModal,
                setShowModal,
                removeEmail,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
