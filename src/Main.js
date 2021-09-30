import React, { useState, useEffect, useContext } from 'react';
import { getListsAPI } from './api/API';
import Button from './components/button/Button';
import ChannelList from './components/channel/ChannelList';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Loading from './components/loading/Loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewMessage from './newmessage/NewMessage';
import Messages from './messages/Messages';
import { UserContext } from './context/UserContext';
import NewChannel from './newchannel/NewChannel';

const Main = () => {
    const {
        currentHeaders,
        setChannelList,
        setAllUsers,
        setContactList,
        allUsers,
        channelList,
        contactList,
        showModal,
        setShowModal,
        loadData,
    } = useContext(UserContext);

    const runAPI = () => {
        let channelListRequest = {
            'access-token': currentHeaders['access-token'],
            client: currentHeaders.client,
            expiry: currentHeaders.expiry,
            uid: currentHeaders.uid,
            url: 'channels',
        };

        let allUsersListRequest = {
            'access-token': currentHeaders['access-token'],
            client: currentHeaders.client,
            expiry: currentHeaders.expiry,
            uid: currentHeaders.uid,
            url: 'users',
        };

        let contactListRequest = {
            'access-token': currentHeaders['access-token'],
            client: currentHeaders.client,
            expiry: currentHeaders.expiry,
            uid: currentHeaders.uid,
            url: 'users/recent',
        };

        console.log('channelsReq', channelListRequest);
        console.log('allusr', allUsersListRequest);
        console.log('contr', contactListRequest);

        getListsAPI(channelListRequest)
            .then((res) => {
                console.log('channels r', res);
                console.log('channels', channelList);
                setChannelList(res);
            })
            .catch((err) => console.log(err));

        getListsAPI(allUsersListRequest)
            .then((res) => {
                console.log('users r', res);
                console.log('users', allUsers);
                setAllUsers(res);
            })
            .catch((err) => console.log(err));

        getListsAPI(contactListRequest)
            .then((res) => {
                console.log('contact r', res);
                console.log('contact', contactList);
                setContactList(res);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        runAPI();
    }, [loadData]);

    // useState(() => {
    //     let channelListRequest = {
    //         'access-token': currentHeaders['access-token'],
    //         client: currentHeaders.client,
    //         expiry: currentHeaders.expiry,
    //         uid: currentHeaders.uid,
    //         url: 'channels',
    //     };

    //     let allUsersListRequest = {
    //         'access-token': currentHeaders['access-token'],
    //         client: currentHeaders.client,
    //         expiry: currentHeaders.expiry,
    //         uid: currentHeaders.uid,
    //         url: 'users',
    //     };

    //     let contactListRequest = {
    //         'access-token': currentHeaders['access-token'],
    //         client: currentHeaders.client,
    //         expiry: currentHeaders.expiry,
    //         uid: currentHeaders.uid,
    //         url: 'users/recent/',
    //     };

    //     console.log('channelsReq', channelListRequest);
    //     console.log('allusr', allUsersListRequest);
    //     console.log('contr', contactListRequest);

    //     getListsAPI(channelListRequest)
    //         .then((res) => {
    //             console.log('channels r', res);
    //             console.log('channels', channelList);
    //             setChannelList(res.data.data);
    //         })
    //         .catch((err) => console.log(err));

    //     getListsAPI(allUsersListRequest)
    //         .then((res) => {
    //             console.log('users r', channelList);
    //             console.log('users', allUsers);
    //             console.log('channels r2', res);
    //             console.log('channels2', channelList);
    //             setAllUsers(res.data.data);
    //         })
    //         .catch((err) => console.log(err));

    //     getListsAPI(contactListRequest)
    //         .then((res) => {
    //             console.log('contact r', channelList);
    //             console.log('contact', contactList);
    //             console.log('channels r3', res);
    //             console.log('channels 3', channelList);
    //             setContactList(res.data.data);
    //         })
    //         .catch((err) => console.log(err));
    // }, [currentHeaders, channelList, allUsers, contactList]);

    // //Logout function
    // const logoutFunction = () => {
    //     localStorage.setItem('User', null);
    //     setUser(null);
    //     setHeaders(null);
    //     setIsLoggedIn(false);
    //     setLoginMessage('');
    //     setSidebarMode('dm');
    // };

    if (!channelList.data || !allUsers || !contactList) {
        // setIsLoading(false);
        return <Loading />;
    }

    // if (isLoading) {
    // return <Loading />;
    // }
    else {
        return (
            <div className="app-container">
                {showModal ? (
                    <NewChannel
                        showModal={showModal}
                        setShowModal={setShowModal}
                    />
                ) : null}
                <Router>
                    <Navbar />
                    <Sidebar />
                    <Switch>
                        <Route path="/:type/:id">
                            <Messages />
                        </Route>
                        <Route exact path="/new-message">
                            <NewMessage />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
};

export default Main;
