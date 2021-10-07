import React, { useContext, useRef, useState } from 'react';
import Button from '../components/button/Button';
import { createChannelAPI } from '../api/API';
import axios from 'axios';
import Toast from '../components/toast/Toast';
import './newchannel.css';
import { UserContext } from '../context/UserContext';
import SearchUser from '../newchannel/SearchUser';
import Pic from '../components/pic/Pic';

const NewChannel = () => {
    const {
        currentHeaders,
        setShowModal,
        userIds,
        addUsers,
        setAddUsers,
        setUserIds,
    } = useContext(UserContext);

    const channelNameRef = useRef();
    // const userInputRef = useRef();

    //Toast
    const [message, setMessage] = useState();
    const [showToast, setShowToast] = useState(false);

    //Error Message
    const [showError, setShowError] = useState(false);

    const onCreateChannel = () => {
        // if (channelNameRef.current.value.length > 15) {
        //     setMessage('Channel Name too long');
        //     setShowError(true);
        //     setShowToast(false);
        //     setTimeout(() => {
        //         setShowError(false);
        //     }, 3000);
        //     channelNameRef.current.focus();
        // } else if (channelNameRef.current.value.length < 3) {
        //     setMessage('Channel Name too short');
        //     setShowError(true);
        //     setTimeout(() => {
        //         setShowError(false);
        //     }, 3000);
        //     channelNameRef.current.focus();
        // } else {
        const data = {
            name: channelNameRef.current.value,
            user_ids: userIds,
            'access-token': currentHeaders['access-token'],
            client: currentHeaders.client,
            expiry: currentHeaders.expiry,
            uid: currentHeaders.uid,
        };
        createChannelAPI(data)
            .then((res) => {
                if (res.data.errors) {
                    setMessage(res.data.errors[0]);
                    setShowToast(true);
                    setTimeout(() => {
                        setShowToast(false);
                    }, 3000);
                } else {
                    setMessage('Channel Created');
                    setShowToast(true);
                    setTimeout(() => {
                        setShowToast(false);
                        setShowModal(false);
                    }, 1500);
                    userIds.splice(0, userIds.length);
                    addUsers.splice(0, addUsers.length);
                    console.log(res);
                }
            })
            .catch((err) => {
                console.log('error', err);
            });
    };
    const newFunction = () => {
        setAddUsers([]);
        setUserIds([]);
        setShowModal(false);
    };

    const updateIndex = (newList, newIdsList) => {
        setAddUsers(newList);
        setUserIds(newIdsList);
    };

    const deleteUser = (e) => {
        let temp_arr = [...addUsers];
        temp_arr.splice(e.target.dataset.index, 1);

        let temp_arr2 = [...userIds];
        temp_arr2.splice(e.target.dataset.index, 1);
        updateIndex(temp_arr, temp_arr2);
        console.log(temp_arr);
        console.log(temp_arr2);
    };

    return (
        <div className="channel-modal-container">
            <form className="channel-modal">
                <div className="modal-upperhalf">
                    <div className="modal-title">
                        <span
                            className="close-button"
                            onClick={() => newFunction()}
                        >
                            ✕
                        </span>
                        <h1 className="sidebar-title">Create a channel</h1>
                    </div>
                    <div className="newchannel-inputs-container">
                        <label className="input-container">
                            <span>Channel Name</span>

                            <input
                                type="text"
                                min="3"
                                max="15"
                                ref={channelNameRef}
                            ></input>
                        </label>
                        {/* <label className='input-container'>
                    <span>Input user IDs</span>
                    {<input type='text' ref={userInputRef}></input>}
                </label> */}
                        {<SearchUser />}
                    </div>
                </div>
                <span className="newchannel-chips-container-label">
                    Users to be added to the channel
                </span>
                <div className="newchannel-chips-container">
                    {addUsers.map((val, index) => {
                        return (
                            <div className="select-chip-container" key={index}>
                                <Pic
                                    id={val.id}
                                    name={val.email}
                                    isChip={true}
                                />
                                <span>{val.email}</span>
                                <div
                                    className="delete-chip-button"
                                    data-index={index}
                                    onClick={(e) => deleteUser(e)}
                                >
                                    ✕
                                </div>
                            </div>
                        );
                    })}
                </div>

                <Button
                    className="button"
                    type="submit"
                    text="Create Channel"
                    onClick={(e) => {
                        e.preventDefault();
                        onCreateChannel();
                    }}
                />
            </form>
            {showToast || showError ? (
                <Toast className="toast-message" text={message} />
            ) : (
                <></>
            )}
        </div>
    );
};

export default NewChannel;
