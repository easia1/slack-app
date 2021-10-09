import React, { useEffect, useContext } from 'react';
import { getListsAPI } from './api/API';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Loading from './components/loading/Loading';
import { Route, Switch } from 'react-router-dom';
import NewMessage from './newmessage/NewMessage';
import Messages from './messages/Messages';
import { UserContext } from './context/UserContext';
import NewChannel from './newchannel/NewChannel';
import Selectmessage from './components/selectmessage.svg';
import MessageSidebar from './messages/MessageSidebar';

const Main = () => {
    const {
        currentHeaders,
        currentUser,
        setChannelList,
        setAllUsers,
        setContactList,
        allUsers,
        channelList,
        contactList,
        showModal,
        setShowModal,
        loadData,
        removeEmail,
        showContent,
        showChatInfo,
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
            url: 'users',
        };

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

    if (!channelList.data || !allUsers || !contactList) {
        return <Loading />;
    } else {
        return (
            <div className="app-container">
                {showModal ? (
                    <NewChannel
                        showModal={showModal}
                        setShowModal={setShowModal}
                    />
                ) : null}
                {/* <Router basename={process.env.PUBLIC_URL}> */}
                <div
                    className={
                        showContent
                            ? 'navigation-bars-container navigation-bars-container-closed'
                            : 'navigation-bars-container '
                    }
                >
                    <Navbar />
                    <Sidebar />
                </div>
                <Switch>
                    <Route path="/" exact>
                        <div
                            className={
                                !showContent
                                    ? 'main-content main-content-closed'
                                    : showChatInfo
                                    ? 'main-content main-content-closed'
                                    : 'main-content'
                            }
                        >
                            <div className="message-container-empty">
                                <img src={Selectmessage} alt="Welcome back" />
                                <span className="empty-title">
                                    Welcome back,{' '}
                                    {removeEmail(currentUser.email)}!
                                </span>
                                <p>
                                    Send a message or choose a contact to get
                                    started.
                                </p>
                            </div>
                        </div>
                    </Route>
                    <Route path="/:type/:id" component={Messages} />
                    <Route exact path="/new-message" component={NewMessage} />
                </Switch>

                <MessageSidebar />
                {/* </Router> */}
            </div>
        );
    }
};

export default Main;
