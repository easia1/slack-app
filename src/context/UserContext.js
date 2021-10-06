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

    //Save user to local storage
    const tokenSessionStorage = (data, headers) => {
        sessionStorage.setItem('User', JSON.stringify(data));
        sessionStorage.setItem('Headers', JSON.stringify(headers));
    };

    //Sidebar state
    const [sidebarMode, setSidebarMode] = useState('dm');

    //List of data
    const [channelList, setChannelList] = useState('');
    const [allUsers, setAllUsers] = useState('');
    const [contactList, setContactList] = useState('');
    const [addUsers, setAddUsers] = useState([]);
    const [userIds, setUserIds] = useState([]);

    //Messages
    const [messages, setMessages] = useState();

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
        sessionStorage.setItem('User', null);
        sessionStorage.setItem('Headers', null);
        setUser(null);
        setHeaders(null);
        setIsLoggedIn(false);
        setLoginMessage('');
        setSidebarMode('dm');
        setShowContent(false);
        return <Redirect to="/login" />;
    };

    //Show new channel modal
    const [showModal, setShowModal] = useState(false);

    //Remove @___.___ from email
    const removeEmail = (email) => {
        return email.split('@')[0];
    };

    const [showContent, setShowContent] = useState(false);
    const [showChatInfo, setShowChatInfo] = useState(false);

    const handleSetShowChatInfo = () => {
        setShowChatInfo((showChatInfo) => !showChatInfo);
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
                tokenSessionStorage,
                showModal,
                setShowModal,
                removeEmail,
                showContent,
                setShowContent,
                showChatInfo,
                setShowChatInfo,
                messages,
                setMessages,
                handleSetShowChatInfo,
                userIds,
                setUserIds,
                addUsers,
                setAddUsers,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
